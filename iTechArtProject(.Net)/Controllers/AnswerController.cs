using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using iTechArtProject_.Net_.Model;
using Models;
using iTechArtProject_.Net_.Context;
using System.Collections;
using iTechArtProject_.Net_.Filters;

namespace iTechArtProject_.Net_.Controllers
{
    [Produces("application/json")]
    [Route("api/Answer")]
    [AuthenticationFilter]
    [AuthorizationFilter("admin")]
    public class AnswerController : Controller
    {
        APIContext _db;
        public AnswerController(APIContext context)
        {
            this._db = context;
        }
        // GET: api/Answer
        [HttpGet]
        public IEnumerable Get(int user, int test, int category)
        {
            return AnswerWrapper.GetAnswers(_db, user, category, test);
        }

        // GET: api/Answer/5
        [HttpGet("{id}")]
        public IEnumerable Get(int id)
        {
            return AnswerWrapper.GetAnswers(_db, id);
        }
        
        // POST: api/Answer
        [HttpPost]
        public void Post([FromBody]AnswerWrapper.Answer answer)
        {
            var userId = (HttpContext.Items["User"] as User).Id;
            TestWrapper.CheckCompletedTest(_db, userId, answer.Test, answer.Category);
            AnswerWrapper.AddAnswer(_db, answer, HttpContext.Items["User"] as User);
        }
    }
}
