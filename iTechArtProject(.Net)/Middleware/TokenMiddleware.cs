using iTechArtProject_.Net_.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Migrations
{
    public class TokenMiddleware
    {
        private readonly RequestDelegate _next;

        public TokenMiddleware(RequestDelegate next)
        {
            this._next = next;
        }
        public async Task Invoke(HttpContext context, APIContext _db)
        {
            try
            {
                var cookieValue = context.Request.Cookies["token"];
                var token = _db.Tokens.Include(p => p.User).Include(p => p.User.Role).FirstOrDefault(s => s.Name == cookieValue);
                if (token == null)
                {
                    context.Items["Errors"] = "Missing a token or wrong it";
                }
                else
                {
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
                await _next.Invoke(context);
            }
        }
    }
}
