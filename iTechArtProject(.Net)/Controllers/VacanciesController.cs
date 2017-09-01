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
    [Route("api/Vacancies")]
    public class VacanciesController : Controller
    {
        APIContext _db;
        public VacanciesController(APIContext context)
        {
            this._db = context;
        }
        // GET: api/News
        [HttpGet(Name = "Vacancies")]
        public async Task<IEnumerable> Get()
        {
            return await VacancyWrapper.GetVacancies(_db);
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
