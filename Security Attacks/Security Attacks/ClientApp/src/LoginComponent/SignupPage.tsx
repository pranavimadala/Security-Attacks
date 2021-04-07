import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react';
import ServiceCalls from '../services/ServicesCall';
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
};

interface ISignupProps {
    changeHandler: any
    login: {
    EmailId: string,
        Password: string,
            UserName: string,
                Type: string
    }
    setLoginStatus:any
}

interface ISignupState {
    login: {
        EmailId: string,
        Password: string,
        UserName: string,
        Type: string
    }
}
export default class SignupComponent extends React.Component<ISignupProps, ISignupState> {
    _service: ServiceCalls = new ServiceCalls();
    constructor(props: ISignupProps){
        super(props);
        this.state = {
            login: this.props.login
        }
        this.sendData=this.sendData.bind(this);
    }

    render() {
        return (
            <div className="signup-page">
                <Stack {...columnProps}>
                    <TextField label="User Name" required onChange={(e) => this.props.changeHandler(e,"username")} value={this.state.login.UserName}/>
                    <TextField label="Email ID" required onChange={(e) => this.props.changeHandler(e,"email")} value={this.state.login.EmailId}/>
                    <TextField label="Password" type="password" canRevealPassword required onChange={(e) => this.props.changeHandler(e,"password")} value={this.state.login.Password}/>
                </Stack>
                <div className="userlogin-footer">
                    <PrimaryButton text="Sign Up" onClick={() => this.props.setLoginStatus(false)}/>
                </div>
            </div>

        );
    }



    sendData(){
        if (this.state.login.EmailId != "" && this.state.login.EmailId != " " && this.state.login.Password != "" && this.state.login.Password != " " && this.state.login.UserName != "" && this.state.login.UserName != " ") {
            this._service.addLoginEntry(this.state.login);
            this.props.setLoginStatus(false)
        }
    }
}