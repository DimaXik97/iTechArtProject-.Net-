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
    static class NewsWrapper
    {
        static string _defaultPhoto= "/img/default_img.png";
        public static News NewNews(APIContext db, News news)
        {
            if (news.Title == null || news.Text == null) throw new Exception("Error data");
            var newNews = new News
            {
                Title = news.Title,
                PhotoSrc = news.PhotoSrc??_defaultPhoto,
                Text = news.Text
            };
            db.News.Add(newNews);
            db.SaveChanges();
            return newNews;
        }
        public static async Task<IEnumerable> GetNews(APIContext db)
        {
            var news = await db.News.ToListAsync();
            return  NewsToFormat(news);
        }
        private static IEnumerable NewsToFormat(IEnumerable<News> news)
        {
            return news.Select(s => new { title = s.Title, img = s.PhotoSrc, text = s.Text });
        }
    }
}

