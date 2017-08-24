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
    public static class AnswerWrapper
    {
        public class Answer
        {
            public int Test { get; set; }
            public int Category { get; set; }
            public List<QuestionAnswer> Questions { get; set; }
        }
        public class QuestionAnswer
        {
            public int Question { get; set; }
            public List<string> Answers { get; set; }
        }
        public static IEnumerable GetAnswers(APIContext db, int userId, int categoryId, int testId)
        {
            IQueryable<UserTest> answers = db.UserTests.Include(s => s.User).Include(s => s.Test);
            if (userId!=0)
            {
                answers = answers.Where(s => s.User.Id == userId);
            }
            if(categoryId!=0|| testId!=0)
            {
                var test = TestWrapper.GetTestByParams(db, testId, categoryId);
                answers = answers.Where(s => s.Test.Id == test.Id);
            }
            return AnswersToFormat(answers);
        }
        private static IEnumerable AnswersToFormat(IQueryable<UserTest> answers)
        {
            return answers.Select(s => new
            {
                id = s.Id,
                date = s.CompletionDate,
                user = new
                {
                    name = s.User.Name,
                    surName = s.User.SurName
                },
                test = new
                {
                    name = s.Test.Name,
                    categoty = s.Test.Category.Name
                }
            }).ToList<dynamic>();
        }
        public static UserTest AddAnswer(APIContext db, Answer answer, User currentUser)
        {
            var user = db.Users.Single(s => s.Id == currentUser.Id);
            var test = TestWrapper.GetTestByParams(db, answer.Test, answer.Category);
            var newUserTest = AddUserTest(db, user, test);
            AddAnswers(db, answer.Questions, user, test);
            db.SaveChanges();
            return newUserTest;
        }
        private static void AddAnswers(APIContext db, List<QuestionAnswer> questions, User user, Test test)
        {
            var answers = new List<Models.Answer>();
            foreach (var element in questions)
            {
                var question = test.Questions.SingleOrDefault(s => s.SortOrder == element.Question);
                if (question != null)
                {
                    switch (question.TypeQuestion)
                    {
                        case TypeQuestion.Text:
                            {
                                AddSingleAnswer(db, answers, user, element, question);
                                break;
                            }
                        case TypeQuestion.Radiobutton:
                            {
                                AddSingleAnswer(db, answers, user, element, question);
                                break;
                            }
                        case TypeQuestion.Checkbox:
                            {
                                AddManyAnswers(db, answers, user, element, question);
                                break;
                            }
                    }
                }
            }
            db.Answers.AddRange(answers);
        }
        private static void AddSingleAnswer(APIContext db, List<Models.Answer> answers, User user, QuestionAnswer userAnswers, Question question)
        {
            if (userAnswers.Answers.Count != 1) throw new Exception("Error type answer in " + question.SortOrder + " question");
            answers.Add(new Models.Answer
            {
                Question = question,
                User = user,
                Value = userAnswers.Answers.First()
            });
        }
        private static void AddManyAnswers(APIContext db, List<Models.Answer> answers, User user, QuestionAnswer userAnswers, Question question)
        {
            if (userAnswers.Answers.Count <1|| userAnswers.Answers.Count>4) throw new Exception("Error type answer in " + question.SortOrder + " question");
            foreach (var answer in userAnswers.Answers)
            {
                answers.Add(new Models.Answer
                {
                    Question = question,
                    User = user,
                    Value = answer
                });
            }
        }
        private static UserTest AddUserTest(APIContext db, User user, Test test)
        {
            var newUserTest = new UserTest
            {
                User = user,
                Test = test,
                CompletionDate = DateTime.Now
            };
            db.UserTests.Add(newUserTest);
            return newUserTest;
        }
        public static IEnumerable GetAnswers(APIContext db, int answerId)
        {
            var answer=db.UserTests.Include(s=>s.Test).Include(s=>s.User).Include(s=>s.Answers).SingleOrDefault(s => s.Id == answerId);
            var questions = db.Questions.Include(s => s.Options).Include(s => s.Test).Where(s => s.Test == answer.Test);
            List<dynamic> result = new List<dynamic>();
            foreach(var question in questions)
            {
                List<dynamic> answersResult = new List<dynamic>();
                foreach (var option in question.Options)
                {
                    string[] attr=null;
                    var userAnswers = answer.Answers.Where(s => s.Value == option.Value&&s.Question== question).Count() != 0; 
                    if (userAnswers)
                    {
                        if (option.IsCorrect) attr=new string[]{ "user", "correct"};
                        else attr = new string[] { "user", "uncorrect" };
                    }
                    else if(option.IsCorrect) attr = new string[] { "uncorrect" };
                    answersResult.Add(new { id = option.SortOrder, text = option.Title, att = attr });
                }
                result.Add(new { type = question.TypeQuestion, question = question.Name, answer= answersResult });
            }
            return result;
        }
    }


}
