using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class UserTest
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Test Test { get; set; }
        public DateTime CompletionDate { get; set; }
        public List<Answer> Answers { get; set; }
    }
}
