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
        public DbSet<Category> Categories { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Option> Option { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Vacancy> Vacancies { get; set; }
        public DbSet<UserTest> UserTests { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public APIContext(DbContextOptions<APIContext> options)
            : base(options)
        { }
    }
}
