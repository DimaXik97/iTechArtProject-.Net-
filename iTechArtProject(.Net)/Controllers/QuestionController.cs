using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using iTechArtProject_.Net_.Context;
using Models;
using iTechArtProject_.Net_.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using iTechArtProject_.Net_.Filters;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace iTechArtProject_.Net_.Controllers
{
    [Produces("application/json")]
    [Route("api/Test/{idCategory}/{idTest}")]
    [AuthenticationFilter]
    public class QuestionController : Controller
    {
        APIContext _db;
        public QuestionController(APIContext context)
        {
            this._db = context;
        }
        // GET
        
        [HttpGet]
        public IEnumerable Get(int idCategory, int idTest)
        {
            var userId = (HttpContext.Items["User"] as User).Id;
            TestWrapper.CheckCompletedTest(_db, userId, idTest, idCategory);
            return QuestionWrapper.GetQuestions(_db, idTest, idCategory);
        }

        //POST
        [AuthorizationFilter("admin")]
        [HttpPost]
        public IActionResult Post(int idCategory,int idTest, [FromBody]Question question)
        {
            var newTest = QuestionWrapper.NewQuestion(_db, idCategory, idTest, question.TypeQuestion, question);
            return CreatedAtRoute("Test", new { id=newTest.SortOrder, name = newTest.Name, isReady= newTest.IsReady, });
        }

        //PUT
        [AuthorizationFilter("admin")]
        [HttpPut("{id}")]
        public void Put(int id, int idCategory, int idTest, [FromBody]Question question)
        {
            QuestionWrapper.UpdateQuestion(_db, idCategory, idTest, id, question);
        }

        // DELETE
        [AuthorizationFilter("admin")]
        [HttpDelete("{id}")]
        public void Delete(int id, int idCategory, int idTest)
        {
            QuestionWrapper.DeleteQuestion(_db, idCategory, idTest, id);
        }
    }
}
