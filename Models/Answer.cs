using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Answer
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Question Question { get; set; }
        public string Value { get; set; }
        public UserTest UserTest { get; set; }
    }
}
