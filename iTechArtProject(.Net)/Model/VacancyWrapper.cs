using iTechArtProject_.Net_.Context;
using Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Model
{
    static class VacancyWrapper
    {
        public static Vacancy NewVacancy(APIContext db, Vacancy vacancy)
        {
            if (vacancy.Title == null || vacancy.Text == null) throw new Exception("Error data");
            var newVacancy = new Vacancy
            {
                Title = vacancy.Title,
                Text = vacancy.Text
            };
            db.Vacancies.Add(newVacancy);
            db.SaveChanges();
            return newVacancy;
        }
        public static IEnumerable GetVacancies(APIContext db)
        {
            var vacancies = db.Vacancies;
            return NewsToFormat(vacancies);
        }
        private static IEnumerable NewsToFormat(IEnumerable<Vacancy> vacancy)
        {
            return vacancy.Select(s => new { title = s.Title, text = s.Text });
        }
    }
}
