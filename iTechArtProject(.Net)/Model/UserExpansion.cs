using iTechArtProject_.Net_.Context;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Model
{
    static class UserExpansion
    {
        private static string _defaultPhoto = "/img/default_photo.png";

        public static string AddUser(APIContext db, User user, Role role)
        {
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
    }

}
