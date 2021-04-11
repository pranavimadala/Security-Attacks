export default class ServiceCalls{
    serviceUrl: string ="https://localhost:5001/";
public getLoginInfo(query:string){
    return fetch("api/Login/GetLoginInfo",{
        headers:
            {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },

            method: 'post',
            body: JSON.stringify(query)
    })
    .then(response=>response.json())
    .then(
        (data) => {
            console.log(data)
            return data;
        },
        (error) => {
            console.log(error);
        }
    )
}

    public addLoginEntry(login: any) {
        return fetch("api/Login/AddLoginEntry", {
            headers:
            {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },

            method: 'post',
            body: JSON.stringify(login)
        })
            .then(response => response.json())
            .then(
                (data) => {
                    console.log(data)
                    return data;
                },
                (error) => {
                    console.log(error);
                }
            )
    }
}