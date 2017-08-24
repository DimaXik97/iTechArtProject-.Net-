using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using iTechArtProject_.Net_.Model;
using iTechArtProject_.Net_.Context;
using Models;
using iTechArtProject_.Net_.Filters;

namespace iTechArtProject_.Net_.Controllers
{
    [Produces("application/json")]
    [Route("api/Test/{idCategory}/{idTest}/{idQuestion}")]
    [AuthenticationFilter]
    public class OptionController : Controller
    {
        APIContext _db;
        public OptionController(APIContext context)
        {
            this._db = context;
        }
        // PUT
        [AuthorizationFilter("admin")]
        [HttpPut("{id}")]
        public void Put(int id,int idCategory,int idTest, int idQuestion, [FromBody]Option option)
        {
            OptionWrapper.UpdateOption(_db, id, idCategory, idTest, idQuestion, option);
        }
    }
}
