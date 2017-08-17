using iTechArtProject_.Net_.Context;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections;
using System.Linq;

namespace iTechArtProject_.Net_.Model
{
    static class UserExpansion
    {
        private static string _defaultPhoto = "/img/default_photo.png";

        public static string AddUser(APIContext db, User user, Role role)
        {
            if(db.Users.Count(s => s.Email == user.Email)!=0) throw new Exception("User already exist");
            var newUser = new User {
                Name = user.Name,
                SurName = user.SurName,
                Email = user.Email,
                Password = user.Password,
                Photo = user.Photo ?? _defaultPhoto,
                IsBan = false,
                Role = role
            };
            db.Users.Add(newUser);

            string token = TokenExpansion.GenerateToken(user);
            db.Tokens.Add(new Token {
                Name = token,
                User = newUser,
                Expired = DateTime.Now.AddDays(1)
            });

            db.SaveChanges();
            return token;
        }
        public static IEnumerable GetAllUser(APIContext db)
        {
            var users= db.Users.Include(s => s.Role).Where(s => s.Role.Name != "admin");
            return UsersToFormat(users);
        }
        private static IEnumerable UsersToFormat(IQueryable<User> users)
        {
            return users.Select(s => new { id = s.Id, name = s.Name + " " + s.SurName }).ToList<dynamic>();
        }
    }

}
