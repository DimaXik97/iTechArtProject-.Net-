using iTechArtProject_.Net_.Context;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Model
{
    static class QuestionWrapper
    {
        public static IEnumerable GetQuestions(APIContext db,int idTest, int idCategory)
        {
            var test = TestWrapper.GetTestByParams(db, idTest, idCategory);
            var questions = db.Questions.Include(s => s.Options).Include(s=>s.Test).Where(s => s.Test == test);
            return QuestionsToFormat(questions);
        }
        private static IEnumerable QuestionsToFormat(IQueryable<Question> question)
        {
            return question.Select(s => new
            {
                id = s.SortOrder,
                type = s.TypeQuestion,
                question = s.Name,
                isReady = s.IsReady,
                answers = OptionWrapper.OptionsToFormat(s.Options, s.TypeQuestion)
            }).ToList();
        }
        public static Question NewQuestion(APIContext db, int idCategory, int idTest, TypeQuestion typeQuestion, Question question)
        {
            var test=TestWrapper.GetTestByParams(db, idTest, idCategory);
            var sortOrder = test.Questions.Count == 0 ? 1 : test.Questions.Max(s => s.SortOrder) + 1;
            var newQuestion = new Question
            {
                Name = question.Name ?? "NewQuestion",
                TypeQuestion=typeQuestion,
                IsReady = false,
                Test=test,
                SortOrder=sortOrder
            };
            OptionWrapper.AddOption(db, typeQuestion, newQuestion);
            db.Questions.Add(newQuestion);
            db.SaveChanges();
            return newQuestion;
        }

        public static void UpdateQuestion(APIContext db, int idCategory, int idTest, int id, Question dataChange)
        {
            var test = TestWrapper.GetTestByParams(db, idTest, idCategory);
            var question = GetQuestionByParams(db, id, test);
            if (dataChange.IsReady != question.IsReady)
            {
                ChangeIsReady(question, dataChange.IsReady);
            }
            else if (dataChange.Name != null)
            {
                ChangeName(question, dataChange.Name);
            }
            else throw new Exception("Error data");
            db.SaveChanges();
        }
        private static void ChangeIsReady(Question question, bool isReady)
        {
            question.IsReady = isReady;
        }
        private static void ChangeName(Question question, string Name)
        {
            question.Name = Name;
        }
        public static void DeleteQuestion(APIContext db, int idCategory, int idTest, int id)
        {
            var test = TestWrapper.GetTestByParams(db, idTest, idCategory);
            var question = GetQuestionByParams(db, id, test);
            db.Questions.Remove(question);
            db.SaveChanges();
        }
        public static Question GetQuestionByParams(APIContext db, int QuestionId, Test test)
        {
            var question = db.Questions.SingleOrDefault(s => s.SortOrder == QuestionId && s.Test == test);
            if(question==null) new Exception("Error question");
            return question;
        }
    }
}

