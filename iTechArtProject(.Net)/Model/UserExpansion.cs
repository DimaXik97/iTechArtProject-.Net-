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

        public static dynamic GetUser(APIContext db, int id, User authUser)
        {
            if (id != authUser.Id && authUser.Role.Name != "admin") throw new Exception("Insufficient rights");
            var user = db.Users.SingleOrDefault(s=>s.Id==id);
            if(user==null) throw new Exception("User not found");
            return UserToFormat(user);
        }

        private static dynamic UserToFormat(User user)
        {
            return new { name = user.Name, surName = user.SurName, photo =user.Photo, isBan=user.IsBan};
        }

        public static void ChangeUser(APIContext db, int id, User dataChange, User authUser)
        {
            var user=db.Users.Include(s=>s.Token).SingleOrDefault(s => s.Id == id);
            if (user == null) throw new Exception("User not found");
            else if (dataChange.IsBan != user.IsBan)
            {
                ChangeIsBan(user, authUser.Role.Name, dataChange.IsBan);
            }
            else if (dataChange.Name != null && dataChange.SurName != null)
            {
                ChangeUserName(user, dataChange.Name, dataChange.SurName, authUser.Id);
            }
            else if (dataChange.Photo != null)
            {
                ChangePhoto(user, dataChange.Photo, authUser.Id);
            }
            else if (dataChange.Password != null)
            {
                ChangePassword(user, dataChange.Password, authUser.Id);
            }
            else throw new Exception("Error data");
            db.SaveChanges();
        }

        private static void ChangeIsBan(User user, string role, bool isBan)
        {
            if (role == "admin")
            {
                user.IsBan = isBan;
                user.Token.Expired = new DateTime(0);
            }
            else throw new Exception("Insufficient rights");
        }

        private static void ChangePhoto(User user, string photo, int userId)
        {
            if (user.Id == userId) user.Photo = photo;
            else throw new Exception("Insufficient rights");
        }

        private static void ChangePassword(User user, string password, int userId)
        {
            if (user.Id == userId)
            {
                user.Password = password;
                user.Token.Expired = new DateTime(0);
            }
            else throw new Exception("Insufficient rights");
        }

        private static void ChangeUserName(User user, string userName,string userSurName, int userId)
        {
            if (user.Id == userId)
            {
                user.Name = userName;
                user.SurName = userSurName;
            }
            else throw new Exception("Insufficient rights");
        }
        
    }

}
