using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsReady { get; set; }
        public DateTime CreationDate { get; set; }
        public List<Test> Tests { get; set; }
    }
}
