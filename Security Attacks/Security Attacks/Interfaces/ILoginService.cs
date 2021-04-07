
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Security_Attacks.Models;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Security_Attacks.Interfaces
{
    public interface ILoginService
    {
        dynamic GetLoginInfo(string query);
        void AddLoginInfo(Login login);
    }
}