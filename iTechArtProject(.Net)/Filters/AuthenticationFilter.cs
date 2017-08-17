﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;

namespace iTechArtProject_.Net_.Filters
{
    public class AuthenticationFilter : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if(context.HttpContext.Items.ContainsKey("Errors"))
            {
                context.Result = new ContentResult { StatusCode = 401, Content = context.HttpContext.Items["Errors"].ToString() };
            }
        }
    }
}
