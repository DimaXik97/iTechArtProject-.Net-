using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using iTechArtProject_.Net_.Model;
using iTechArtProject_.Net_.Filters;
using iTechArtProject_.Net_.Context;
using System.Collections;

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
        }
        // GET: api/User
        [HttpGet]
        [AuthenticationFilter]
        [AuthorizationFilter("admin")]
        public IEnumerable Get()
        {
            return UserWrapper.GetAllUsers(_db,"admin");
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(UserWrapper.GetUser(_db, id, HttpContext.Items["User"] as User));
            }
            catch(Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
            
        }
        // POST: api/User
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            try
            {
                var role = RoleWrapper.GetDefaulRole(_db);
                var newUser = UserWrapper.AddUser(_db, user, role);
                var token = TokenWrapper.AddToken(_db, newUser);
                Response.Cookies.Append("token", token);
                return CreatedAtRoute("Get", new { id = newUser.Id }, new { id=newUser.Id, name=newUser.Name, surName=newUser.SurName, email=newUser.Email});
            }
            catch(Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }
        [HttpPut]
        public IActionResult GetToken([FromBody]User user)
        {
            try
            {
                var token = TokenWrapper.GetToken(_db, user.Email, user.Password);
                Response.Cookies.Append("token", token);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(new { message=e.Message});
            }
        }

        // PUT: api/User/id
        [AuthenticationFilter]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User user)
        {
            try
            {
                UserWrapper.UpdateUser(_db, id, user, HttpContext.Items["User"] as User);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(new { message = e.Message });
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return NotFound();
        }
       
        
    }
}
