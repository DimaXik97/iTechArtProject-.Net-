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
    static class TestWrapper
    {
        public static IEnumerable GetTest(APIContext db, int idCategory, User currentUser)
        {
            var category = db.Categories.Include(s=>s.Tests).SingleOrDefault(s=>s.Id== idCategory);
            if (category == null || (!category.IsReady&& currentUser.Role.Name=="user")) throw new Exception("Error category");
            var tests = currentUser.Role.Name != "user" ? category.Tests : category.Tests.Where(s=>s.IsReady);
            return TestsToFormat(tests);
        }
        private static IEnumerable TestsToFormat(IEnumerable<Test> tests)
        {
            return tests.Select(s => new { id = s.SortOrder, name = s.Name, date = s.CreationDate, isReady = s.IsReady }).ToList<dynamic>();
        }
        public static Test GetTestByParams(APIContext db, int testId, int categoryId)
        {
            var test = db.Tests.Include(s => s.Category).Include(s => s.Questions).SingleOrDefault(s => s.Category.Id == categoryId && s.SortOrder == testId);
            if (test == null) throw new Exception("Error test");
            return test;
        }
        public static Test AddTest(APIContext db, int idCategory, Test test)
        {
            var category = db.Categories.Include(s=>s.Tests).SingleOrDefault(s => s.Id == idCategory);
            if (category==null) throw new Exception("Error category");
            var sortOrder = category.Tests.Count==0 ? 1 : category.Tests.Max(s => s.SortOrder)+1;
            if (test != null) throw new Exception("Error object request");
            var newTest = new Test
            {
                Name = test.Name ?? "NewTest",
                IsReady = false,
                CreationDate = DateTime.Now,
                Category = category,
                SortOrder = sortOrder
            };
            db.Tests.Add(newTest);
            db.SaveChanges();
            return newTest;
        }
        public static void UpdateTest(APIContext db, int idTest, int idCategory, Test dataChange)
        {
            var test = GetTestByParams(db, idTest, idCategory);
            if (dataChange.IsReady != test.IsReady)
            {
                ChangeIsReady(test, dataChange.IsReady);
            }
            else if (dataChange.Name != null)
            {
                ChangeName(test, dataChange.Name);
            }
            else throw new Exception("Error data");
            db.SaveChanges();
        }
        private static void ChangeIsReady(Test test, bool isReady)
        {
            test.IsReady = isReady;
        }
        private static void ChangeName(Test test, string Name)
        {
            test.Name = Name;
        }
        public static void DeleteTest(APIContext db, int idTest, int idCategory)
        {
            var test = GetTestByParams(db, idTest, idCategory);
            db.Tests.Remove(test);
            db.SaveChanges();
        }
        public static void CheckCompletedTest(APIContext _db, int _userId, int _testId, int _categoryId)
        {
            var test = TestWrapper.GetTestByParams(_db, _testId, _categoryId);
            var user = _db.Users.Single(s => s.Id == _userId);
            if (_db.UserTests.SingleOrDefault(s => s.Test == test && s.User == user) != null)
                throw new Exception("You already completed this test");
        }

        

    }
}
