using System;
using System.Collections.Generic;

using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Security_Attacks.Interfaces;
using Security_Attacks.Models;

namespace Security_Attacks.Services
{
    public class LoginService : ILoginService
    {
        private static readonly HttpClient httpClient = new HttpClient();
        public string EndpointUri { get; private set; }
        public string PrimaryKey { get; private set; }
        public string DatabaseId { get; private set; }
        public string CollectionId { get; private set; }
        public string JobSubmittedUrl { get; set; }
        public string CIJobSharepointUrl { get; set; }
        public DocumentClient client { get; private set; }
        public IConfiguration configuration { get; private set; }
        public Uri myStoreCollectionUri { get; private set; }
    

    public LoginService()
        {
            EndpointUri = "https://securityattacks.documents.azure.com:443/";
            PrimaryKey = "JlCN90yrAGQyGgyvslZnVl4z9bRFiay3oD38K3GriKrZga4aBIR1XlKYPMzpODj5N19ugDKZ1GhSykAEVLFGaA==";
            DatabaseId = "securitytest";
            CollectionId = "items";
             var res = CreateDatabase();
            res.Wait();
        }

        public async Task CreateDatabase()
        {
            client = new DocumentClient(new Uri(EndpointUri), PrimaryKey);
            await client.CreateDatabaseIfNotExistsAsync(new Database { Id = DatabaseId });
            await client.CreateDocumentCollectionIfNotExistsAsync(UriFactory.CreateDatabaseUri(DatabaseId), new DocumentCollection { Id = CollectionId });
        }
        public  dynamic GetLoginInfo(string query)
        {
            try
            {
                List<dynamic> results= client.CreateDocumentQuery(UriFactory.CreateDocumentCollectionUri(DatabaseId, CollectionId), query).ToList();
                return results;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public async Task<dynamic> AddLoginInfo(dynamic login)
        {
            try
            {
               
                ResourceResponse<Document> response = await this.client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(DatabaseId, CollectionId), login);

                return JsonConvert.DeserializeObject<dynamic>(response.Resource.ToString());
            }
            catch (Exception e)
            {
                return e;
            }
        }
    }
}