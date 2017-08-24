using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Name{ get; set; }
        public bool IsReady { get; set; }
        public int SortOrder { get; set; }
        public TypeQuestion TypeQuestion{ get; set; }

        public Test Test { get; set; }
        public List<Option> Options { get; set; }
    } 
}
