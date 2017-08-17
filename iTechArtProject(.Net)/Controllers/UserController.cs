using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using iTechArtProject_.Net_.Filters;
using Microsoft.EntityFrameworkCore;

namespace iTechArtProject_.Net_.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        APIContext _db;
        public UserController(APIContext context)
        {
            this._db = context;
            if (!_db.Roles.Any())
            {
                _db.Roles.AddRange(new Role { Name = "admin" }, new Role { Name = "user" });
                _db.SaveChanges();
            }
        }
        // GET: api/User
        [AuthenticationFilter]
        [HttpGet]
        public IEnumerable<User> Get()
        {
            User user =(User)HttpContext.Items["User"];
            return _db.Users.ToList();
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            var role = getDefaulRole();
            var token = addUser(user, role);
            Response.Cookies.Append("token", token);
            return Created("ff",user);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        private Role getDefaulRole()
        {
            return _db.Roles.Single(s => s.Name == "user");
        }
        private string generateToken(User user)
        {
            return user.Name + user.Email + DateTime.Now.Ticks;
        }
        private string addUser(User user, Role role)
        {
            var newUser = new User { Name = user.Name, SurName = user.SurName, Email = user.Email, Password = user.Password, Role = role };
            _db.Users.Add(newUser);
            string token = generateToken(user);
            _db.Tokens.Add(new Token { NameToken = token, User = newUser, Expired = DateTime.Now.AddDays(1) });
            _db.SaveChanges();
            return token;
        }
        
    }
}
