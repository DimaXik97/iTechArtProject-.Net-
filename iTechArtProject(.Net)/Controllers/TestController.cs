using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using iTechArtProject_.Net_.Context;
using iTechArtProject_.Net_.Model;
using Models;
using iTechArtProject_.Net_.Filters;
using System.Collections;

namespace iTechArtProject_.Net_.Controllers
{
    [Produces("application/json")]
    [Route("api/Test/{idCategory}")]
    [AuthenticationFilter]
    public class TestController : Controller
    {
        APIContext _db;
        public TestController(APIContext context)
        {
            this._db = context;
        }

        //GET
        [HttpGet(Name = "Test")]
        public IEnumerable Get(int idCategory)
        {
            return TestWrapper.GetTest(_db, idCategory, HttpContext.Items["User"] as User);
        }

        //POST
        [AuthorizationFilter("admin")]
        [HttpPost]
        public IActionResult Post(int idCategory, [FromBody]Test tets)
        {
            var newTest = TestWrapper.AddTest(_db, idCategory, tets);
            return CreatedAtRoute("Test", new { id=newTest.SortOrder ,name = newTest.Name, isReady = newTest.IsReady, date = newTest.CreationDate });
        }

        //PUT
        [AuthorizationFilter("admin")]
        [HttpPut("{id}")]
        public void Put(int id, int idCategory, [FromBody]Test test)
        {
            TestWrapper.UpdateTest(_db, id, idCategory, test);  
        }

        //DELETE
        [AuthorizationFilter("admin")]
        [HttpDelete("{id}")]
        public void Delete(int id, int idCategory)
        {
            TestWrapper.DeleteTest(_db, id, idCategory);
        }
    }
}
