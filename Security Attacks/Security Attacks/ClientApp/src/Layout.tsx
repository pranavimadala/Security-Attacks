import React from 'react';
import './App.css';
import HomeComponent from '.././src/LoginComponent/HomeComponent';
import { Switch, Route, Redirect } from 'react-router';
import DetailsComponent from './LoginComponent/DetailsComponent';
import StudentRegistrationComponent from './LoginComponent/StudentRegistration';

export default class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={
                        (props) =>
                            <HomeComponent
                                {...props}
                            />
                    }
                            />
                            <Route
                                exact
                                path="/details"
                                render={
                                    (props) =>
                                        <DetailsComponent
                                            {...props}
                                            emailId=""
                                            password=""
                                            userName=""
                                setLoginStatus=""
                                    />
                                }
                />
                <Route
                    exact
                    path="/studentregistration"
                    render={
                        (props) =>
                            <StudentRegistrationComponent
                                {...props}
                            />
                    }
                />
                </Switch>
        );
    }
}