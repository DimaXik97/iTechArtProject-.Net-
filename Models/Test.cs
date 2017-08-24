using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class Test
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsReady { get; set; }
        public int SortOrder { get; set; }
        public DateTime CreationDate { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public List<Question> Questions { get; set; }

        public List<UserTest> UserTests { get; set; }
    }
}
