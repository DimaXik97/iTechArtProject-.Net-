using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using iTechArtProject_.Net_.Context;
using System.Collections;
using iTechArtProject_.Net_.Model;
using Models;
using iTechArtProject_.Net_.Filters;

namespace iTechArtProject_.Net_.Controllers
{
    [Produces("application/json")]
    [Route("api/Vacancy")]
    public class VacancyController : Controller
    {
        APIContext _db;
        public VacancyController(APIContext context)
        {
            this._db = context;
        }
        // GET: api/News
        [HttpGet(Name = "Vacancy")]
        public IEnumerable Get()
        {
            return VacancyWrapper.GetVacancies(_db);
        }

        // POST: api/News
        [HttpPost]
        [AuthenticationFilter]
        [AuthorizationFilter("admin")]
        public void Post([FromBody]Vacancy vacancy)
        {
            var newVacancy = VacancyWrapper.NewVacancy(_db, vacancy);

        }
    }
}
