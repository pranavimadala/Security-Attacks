export default class ServiceCalls{
serviceUrl:string="http://localhost:3000/";
public getLoginInfo(emailId:string,password:string){
 var   query:string="select * from c";
    return fetch("api/Login/GetLoginInfo",{
        headers:
            {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },

            method: 'post',
            body: JSON.stringify(query)
    })
    .then(response=>response.json)
    .then(
        (data) => {
            return data;
        },
        (error) => {
            console.log(error);
        }
    )
}


}