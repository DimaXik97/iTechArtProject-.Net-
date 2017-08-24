using iTechArtProject_.Net_.Context;
using Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Model
{
    static class CategoryWrapper
    {
        public static IEnumerable GetCategory(APIContext db, User currentUser)
        {
            var category = currentUser.Role.Name == "user" ? db.Categories.Where(s => s.IsReady) : db.Categories;
            return CatigoriesToFormat(category);
        }
        private static IEnumerable CatigoriesToFormat(IQueryable<Category> category)
        {
            return category.Select(s => new { id = s.Id, name = s.Name, date=s.CreationDate, isReady=s.IsReady}).ToList<dynamic>();
        }
        public static Category NewCategory(APIContext db, Category category)
        {
            if (category != null) throw new Exception("Error object request");
            var newCategory = new Category
            {
                Name = category.Name??"NewCategory",
                IsReady = false,
                CreationDate = DateTime.Now
            };
            db.Categories.Add(newCategory);
            db.SaveChanges();
            return newCategory;
        }

        public static void UpdateCategory(APIContext db, int id, Category dataChange)
        {
            var category = db.Categories.SingleOrDefault(s => s.Id == id);
            if (category == null) throw new Exception("Error category");
            if (dataChange.IsReady != category.IsReady)
            {
                ChangeIsReady(category, dataChange.IsReady);
            }
            else if (dataChange.Name != null)
            {
                ChangeName(category, dataChange.Name);
            }
            else throw new Exception("Error data");
            db.SaveChanges();
        }
        private static void ChangeIsReady(Category category, bool isReady)
        {
            category.IsReady = isReady;
        }
        private static void ChangeName(Category category, string Name)
        {
            category.Name = Name;
        }

        public static void DeleteCategory(APIContext db, int id)
        {
            var category = db.Categories.SingleOrDefault(s => s.Id == id);
            if (category == null) throw new Exception("Error category");
            db.Categories.Remove(category);
            db.SaveChanges();
        }
    }
}
