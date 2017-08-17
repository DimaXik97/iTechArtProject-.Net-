﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;
using iTechArtProject_.Net_.Model;

namespace iTechArtProject_.Net_.Context
{
    public static class DbInitializer
    {
        public static void Initialize(APIContext db)
        {
            if (!db.Roles.Any())
            {
                db.Roles.AddRange(new Role { Name = "admin" }, new Role { Name = "user" });
                db.SaveChanges();
            }
            if(db.Users.Count(s=>s.Name=="admin")==0)
            {
                var role=db.Roles.Single(s => s.Name == "admin");
                UserExpansion.AddUser(db, new User { Name = "admin", SurName = "admin", Email = "admin", Password = "admin" }, role);
                db.SaveChanges();
            }
        }
    }
}