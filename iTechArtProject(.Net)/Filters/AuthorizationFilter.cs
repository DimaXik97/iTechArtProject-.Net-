using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iTechArtProject_.Net_.Filters
{
    class AuthorizationFilter : Attribute, IAuthorizationFilter
    {
        string _role;
        public AuthorizationFilter(string role)
        {
            _role = role;
        }
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var user = context.HttpContext.Items["User"] as User;
            if (user==null) context.Result = new JsonResult(new { message = "Unknown error" }) { StatusCode = 400 }; 
            else if(user.Role.Name!=_role) context.Result = new JsonResult(new { message = "Insufficient rights" }) { StatusCode = 403 };
        }
    }
}
