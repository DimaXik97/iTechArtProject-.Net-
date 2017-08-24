using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using iTechArtProject_.Net_.Model;
using iTechArtProject_.Net_.Context;
using Models;
using iTechArtProject_.Net_.Filters;
using System.Collections;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace iTechArtProject_.Net_.Controllers
{
    [Produces("application/json")]
    [Route("api/Test")]
    [AuthenticationFilter]
    public class CategoryController : Controller
    {
        APIContext _db;
        public CategoryController(APIContext context)
        {
            this._db = context;
        }
        
        //GET
        [HttpGet(Name = "Category")]
        public IEnumerable Get()
        {
            return CategoryWrapper.GetCategory(_db, HttpContext.Items["User"] as User);
        }

        //POST
        [AuthorizationFilter("admin")]
        [HttpPost]
        public IActionResult Post([FromBody]Category category)
        {
            var newCategory=CategoryWrapper.NewCategory(_db, category);
            return CreatedAtRoute("Category", new { name = newCategory.Name, isReady = newCategory.IsReady, creationDate = newCategory.CreationDate });
        }

        //PUT
        [AuthorizationFilter("admin")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Category category)
        {
            CategoryWrapper.UpdateCategory(_db, id, category); 
        }

        //DELETE
        [AuthorizationFilter("admin")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            CategoryWrapper.DeleteCategory(_db, id);
        }
    }
}
