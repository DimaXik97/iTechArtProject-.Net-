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
    [Route("api/News")]
    public class NewsController : Controller
    {
        APIContext _db;
        public NewsController(APIContext context)
        {
            this._db = context;
        }
        // GET: api/News
        [HttpGet(Name ="News")]
        public async Task<IEnumerable> Get()
        {
            return await NewsWrapper.GetNews(_db);
        }

        // POST: api/News
        [AuthenticationFilter]
        [AuthorizationFilter("admin")]
        [HttpPost]
        public IActionResult Post([FromBody]News news)
        {
            var newNews = NewsWrapper.NewNews(_db, news);
            return CreatedAtRoute("News", newNews);
        }
    }
}
