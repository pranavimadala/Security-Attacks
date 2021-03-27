import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react';
import ServiceCalls from '../services/ServicesCall';

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
  };

interface ILoginState{
    emailId:string,
    password:string
}

export default class LoginComponent extends React.Component<{}, ILoginState> {

    _service:ServiceCalls = new ServiceCalls();
    constructor(props:any){
        super(props);
        this.state={
            emailId:"",
            password:""
        }
        this.changehandler=this.changehandler.bind(this);
        this.fetchData=this.fetchData.bind(this);
    }

    render(){
        return(
            <div className="login-page">
                <Stack {...columnProps}>
                <TextField label="Email ID" required onChange={(e)=>this.changehandler(e,"email")} value={this.state.emailId}/>
                <TextField label="Password" type="password" canRevealPassword required onChange={(e)=>this.changehandler(e,"password")} value={this.state.password}/>
                </Stack>
                <div className="userlogin-footer">
                    <PrimaryButton text="Sign Up" onClick={this.fetchData}/>
                </div>
            </div>

        );
    }

    changehandler(event:any,type:string){
        if(type=="email"){
            this.setState({
                emailId:event.target.value
            })
        }
        else if(type=="password"){
            this.setState({
                password:event.target.value
            })
        }
    }

    fetchData(){
        if(this.state.emailId!=""&&this.state.emailId!=" "&&this.state.password!=""&&this.state.password!=" ")
        {
            console.log(this.state)
            this._service.getLoginInfo(this.state.emailId,this.state.password).then((data)=>console.log((data)))
        }
    }
}