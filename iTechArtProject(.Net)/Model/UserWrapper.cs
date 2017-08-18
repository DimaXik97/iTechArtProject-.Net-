using iTechArtProject_.Net_.Context;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections;
using System.Linq;

namespace iTechArtProject_.Net_.Model
{
    static class UserWrapper
    {
        private static string _defaultPhoto = "/img/default_photo.png";

        public static User AddUser(APIContext db, User user, Role role)
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
            db.SaveChanges();
            return newUser;
        }

        public static IEnumerable GetAllUsers(APIContext db, params string[] rolesNotInclude)
        {
            var users= db.Users.Include(s => s.Role).Where(s => IsInclude(s.Role.Name, rolesNotInclude));
            return UsersToFormat(users);
        }
        private static bool IsInclude(string role, string[] rolesNotInclude)
        {
            bool isInclude = true;
            foreach (var element in rolesNotInclude)
            {
                if (role == element)
                {
                    isInclude = false;
                }
            }
            return isInclude;
        }
        private static IEnumerable UsersToFormat(IQueryable<User> users)
        {
            return users.Select(s => new { id = s.Id, name = s.Name + " " + s.SurName }).ToList<dynamic>();
        }

        public static dynamic GetUser(APIContext db, int id, User currentUser)
        {
            if (id != currentUser.Id && currentUser.Role.Name != "admin") throw new Exception("Insufficient rights");
            var user = db.Users.SingleOrDefault(s=>s.Id==id);
            if(user==null) throw new Exception("User not found");
            return UserToFormat(user);
        }

        private static dynamic UserToFormat(User user)
        {
            return new { name = user.Name, surName = user.SurName, photo =user.Photo, isBan=user.IsBan};
        }

        public static void UpdateUser(APIContext db, int id, User dataChange, User currentUser)
        {
            var user=db.Users.Include(s=>s.Token).SingleOrDefault(s => s.Id == id);
            if (user == null) throw new Exception("User not found");
            else if (dataChange.IsBan != user.IsBan)
            {
                ChangeIsBan(user, currentUser.Role.Name, dataChange.IsBan);
            }
            else if (dataChange.Name != null && dataChange.SurName != null)
            {
                ChangeUserName(user, dataChange.Name, dataChange.SurName, currentUser.Id);
            }
            else if (dataChange.Photo != null)
            {
                ChangePhoto(user, dataChange.Photo, currentUser.Id);
            }
            else if (dataChange.Password != null)
            {
                ChangePassword(user, dataChange.Password, currentUser.Id);
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
