﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhotoSrc { get; set; }
        public bool IsBan { get; set; }

        public int RoleId { get; set; }
        public Role Role { get; set; }

        public Token Token { get; set; }

        public List<UserTest> UserTests { get; set; }
    }
}
