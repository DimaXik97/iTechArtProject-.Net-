using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using iTechArtProject_.Net_.Context;
using Models;

namespace iTechArtProject_.Net_
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddDbContext<APIContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, APIContext db)
        {

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.Use(async (context, next) =>
            {
                try
                {
                    var cookieValue = context.Request.Cookies["token"];
                    var token = db.Tokens.Include(p => p.User).Include(p=>p.User.Role).FirstOrDefault(s => s.Name == cookieValue);
                    if (token == null)
                    {
                        context.Items["Errors"] = "Missing a token or wrong it";
                    }
                    else
                    {
                        db.Entry(token).Reload();
                        if (token.Expired < DateTime.Now)
                            context.Items["Errors"] = "Token expired";
                        else
                        {
                            context.Items["User"] = token.User;
                        }
                    }
                }

                finally
                {
                    await next.Invoke();
                }
            });

            app.UseMvc();

            DbInitializer.Initialize(db);
        }
    }
}
