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
using Microsoft.EntityFrameworkCore;
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
        [AuthenticationFilter]
        [HttpGet]
        public IEnumerable Get()
        {
            return UserExpansion.GetAllUser(_db);
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
            try
            {
                var role = RoleExpansion.GetDefaulRole(_db);
                var token = UserExpansion.AddUser(_db, user, role);
                Response.Cookies.Append("token", token);
                return CreatedAtRoute("Get", new { id = 1 }, user);
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
                var token = TokenExpansion.GetToken(_db, user.Email, user.Password);
                Response.Cookies.Append("token", token);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest(new { message=e.Message});
            }
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return NotFound();
        }
       
        
    }
}
