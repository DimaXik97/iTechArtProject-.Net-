using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Token
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Expired { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
