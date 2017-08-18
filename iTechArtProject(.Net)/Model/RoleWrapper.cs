using iTechArtProject_.Net_.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Model
{
    static class RoleWrapper
    {
        private static string _defaultRole="user";

        public static Role GetDefaulRole(APIContext db)
        {
            return db.Roles.Single(s => s.Name == _defaultRole);
        }
    }
}
