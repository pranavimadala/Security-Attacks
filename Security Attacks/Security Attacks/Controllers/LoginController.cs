using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Security_Attacks.Interfaces;
using Security_Attacks.Models;

namespace Security_Attacks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class LoginController : ControllerBase{

        ILoginService loginServices;

        public LoginController(ILoginService loginService)
        {
            this.loginServices = loginService;
        }

        [HttpPost]

        [Route("GetLoginInfo")]
        public dynamic GetLoginInfo([FromBody]string query){
            return loginServices.GetLoginInfo(query);
        }

        [HttpPost]
        [Route("AddLoginEntry")]
        public void AddLoginEntry(Login login)
        {
            loginServices.AddLoginInfo(login);
        }
    }
}