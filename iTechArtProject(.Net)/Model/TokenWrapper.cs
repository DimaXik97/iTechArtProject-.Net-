using iTechArtProject_.Net_.Context;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Model
{
    static class TokenWrapper
    {
        public static string GenerateToken(User user)
        {
            return user.Name + user.Email + DateTime.Now.Ticks;
        }
        public static string AddToken(APIContext db, User user)
        {
            string token = TokenWrapper.GenerateToken(user);
            db.Tokens.Add(new Token
            {
                Name = token,
                User = user,
                Expired = DateTime.Now.AddDays(1)
            });
            db.SaveChanges();
            return token;
        }
        public static string GetToken(APIContext db, string email, string pass)
        {
            Token token = db.Tokens.Include(p => p.User).SingleOrDefault(p => p.User.Email == email);
            if (token == null) throw new Exception("Error Email");
            else if (token.User.Password != pass) throw new Exception("Error password");
            else if (token.User.IsBan) throw new Exception("You banned");
            else
            {
                SetExpirationTime(token);
                db.SaveChanges();
                return token.Name;
            }
        }
        private static void SetExpirationTime(Token token)
        {
            token.Expired = DateTime.Now.AddDays(1);
        }
    }
}
