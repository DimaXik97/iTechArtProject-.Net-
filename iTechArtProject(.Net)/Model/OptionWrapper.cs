using iTechArtProject_.Net_.Context;
using Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Model
{
    public static class OptionWrapper
    {
        public static void AddOption(APIContext db, TypeQuestion typeQuestion, Question question)
        {
            List<Option> newOption = new List<Option>();
            switch (typeQuestion)
            {
                case TypeQuestion.Text:
                    {
                        newOption.Add(new Option { Title = null, Value = "???", IsCorrect = true, SortOrder=1, Question = question });
                        break;
                    };
                case TypeQuestion.Radiobutton:
                    {
                        for (int i = 1; i <= 4; i++)
                        {
                            newOption.Add(new Option { Title = "NewItemRb" + i, Value = "value" + 1, IsCorrect = false, SortOrder = i, Question = question });
                        }
                        break;
                    };
                case TypeQuestion.Checkbox:
                    {
                        for (int i = 1; i <= 4; i++)
                        {
                            newOption.Add(new Option { Title = "NewItemCB" + i, Value = "value" + i, IsCorrect = false, SortOrder = i, Question = question });
                        }
                        break;
                    }
                default: throw new Exception("Error question type");
            }
            db.Option.AddRange(newOption);
        }
        public static IEnumerable OptionsToFormat(List<Option> options, TypeQuestion typeQuestion)
        {
            if (typeQuestion == TypeQuestion.Text) return null;
            else if (typeQuestion == TypeQuestion.Checkbox || typeQuestion == TypeQuestion.Radiobutton)
                return options.Select(s => new { title = s.Title, value = s.Value }).ToList<dynamic>();
            else throw new Exception("Error type question");
        }
        public static void UpdateOption(APIContext db, int id, int categoryId, int testId, int questionId, Option dataOption)
        {
            var test=TestWrapper.GetTestByParams(db, testId, categoryId);
            var question = QuestionWrapper.GetQuestionByParams(db, questionId, test);
            var option = question.Options.SingleOrDefault(s => s.SortOrder == id);
            if (option == null) throw new Exception("Error option");
            if (dataOption.Title != null) option.Title = dataOption.Title;
            if (dataOption.IsCorrect != option.IsCorrect) option.IsCorrect = dataOption.IsCorrect;
            db.SaveChanges();
        }
    }
}
