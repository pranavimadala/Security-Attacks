import React from 'react';
import { Pivot, PivotItem, PivotLinkSize  } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { NavLink } from 'react-router-dom';
import LoginComponent from './LoginPage';
import SignupComponent from './SignupPage';
import DetailsComponent from './DetailsComponent';

interface IHomeState {
    login: {
        EmailId: string,
        Password: string,
        UserName: string,
        Type: string
    }
    isLogin:boolean
}

export default class HomeComponent extends React.Component<{}, IHomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            login: {
                EmailId: "",
                Password: "",
                UserName: "",
                Type: "Login"
            },
            isLogin:true
        }
        this.changehandler = this.changehandler.bind(this);
        this.setLoginStatus = this.setLoginStatus.bind(this);
    }
  render() {
    return (
        <div className="homepage-component">
            {this.state.isLogin ?
                <div className="userlogin-container">
                    <Pivot linkSize={PivotLinkSize.large}>
                        <PivotItem headerText="Login" itemKey="login" >
                            <LoginComponent changeHandler={this.changehandler} login={this.state.login} setLoginStatus={this.setLoginStatus}/>
                        </PivotItem>
                        <PivotItem headerText="Sign Up" itemKey="signup">
                            <SignupComponent changeHandler={this.changehandler} login={this.state.login} setLoginStatus={this.setLoginStatus}/>
                        </PivotItem>
                    </Pivot>
                </div>
                :
                

                <DetailsComponent emailId={this.state.login.EmailId} password={this.state.login.Password} userName={this.state.login.UserName} setLoginStatus={this.setLoginStatus}/>
                   
            }
      </div>
    );
    }

   public changehandler(event: any, type: string) {
        var value = event.target.value
        var loginDetails = this.state.login
        if (type == "email") {
            loginDetails.EmailId = value
            this.setState({
                login: loginDetails
            })
        }
        else if (type == "password") {
            loginDetails.Password = value
            this.setState({
                login: loginDetails
            })
        }
        else if (type == "username") {
            loginDetails.UserName = value
            this.setState({
                login: loginDetails
            })
        }
    }

    public setLoginStatus(value: boolean) {
        if (value) {
            this.setState({
                isLogin: value,
                login: {
                    EmailId: "",
                    Password: "",
                    UserName: "",
                    Type: "Login"
                },
            })
        }
        else
        this.setState({
            isLogin:value
        })
    }
}