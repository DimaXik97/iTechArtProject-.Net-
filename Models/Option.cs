using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Option
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Value { get; set; }
        public bool IsCorrect { get; set; }
        public int SortOrder { get; set; }

        public Question Question { get; set; }
    }
}
