using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Test
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsReady { get; set; }
        public DateTime CreationDate { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
