using System;
using Microsoft.EntityFrameworkCore;
using Models;

namespace iTechArtProject_.Net_.Context
{
    public class APIContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Token> Tokens { get; set; }
        public APIContext(DbContextOptions<APIContext> options)
            : base(options)
        { }

        internal object Entry<T>(Token token)
        {
            throw new NotImplementedException();
        }
    }
}
