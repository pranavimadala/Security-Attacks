import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react';
import ServiceCalls from '../services/ServicesCall';

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
};

interface ILoginProps {
    changeHandler: any
    login: {
        EmailId: string,
        Password: string,
        UserName: string,
        Type: string
    }
    setLoginStatus:any
}

interface ILoginState{
    login: {
        EmailId: string,
        Password: string,
        UserName: string,
        Type: string
    }
}

export default class LoginComponent extends React.Component<ILoginProps, ILoginState> {

    _service:ServiceCalls = new ServiceCalls();
    constructor(props: ILoginProps){
        super(props);
        this.state = {
            login: this.props.login
        }
  
    }

    render(){
        return(
            <div className="login-page">
                <Stack {...columnProps}>
                    <TextField label="Email ID" required onChange={(e) => this.props.changeHandler(e, "email")} value={this.state.login.EmailId} />
                    <TextField label="Password" type="password" canRevealPassword required onChange={(e) => this.props.changeHandler(e, "password")} value={this.state.login.Password} />
                </Stack>
                <div className="userlogin-footer">
                    <PrimaryButton text="Login" onClick={() => this.props.setLoginStatus(false)}/>
                </div>
            </div>

        );
    }

 
}