import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react';

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
};

interface ISignupPage{
    emailId:string,
    password:string,
    userName:string
}

export default class SignupComponent extends React.Component<{}, ISignupPage> {

    constructor(props:any){
        super(props);
        this.state={
            emailId:"",
            password:"",
            userName:""
        }
        this.changehandler=this.changehandler.bind(this);
        this.sendData=this.sendData.bind(this);
    }

    render() {
        return (
            <div className="signup-page">
                <Stack {...columnProps}>
                    <TextField label="User Name" required onChange={(e)=>this.changehandler(e,"username")} value={this.state.userName}/>
                    <TextField label="Email ID" required onChange={(e)=>this.changehandler(e,"email")} value={this.state.emailId}/>
                    <TextField label="Password" type="password" canRevealPassword required onChange={(e)=>this.changehandler(e,"password")} value={this.state.password}/>
                </Stack>
                <div className="userlogin-footer">
                    <PrimaryButton text="Sign Up" onClick={this.sendData}/>
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
        else if(type=="username"){
            this.setState({
                userName:event.target.value
            })
        }
    }

    sendData(){
        if(this.state.emailId!=""&&this.state.emailId!=" "&&this.state.password!=""&&this.state.password!=" "&&this.state.userName!=""&&this.state.userName!=" ")
        console.log(this.state)
    }
}