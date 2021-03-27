import React from 'react';
import { Pivot, PivotItem, PivotLinkSize  } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import LoginComponent from './LoginPage';
import SignupComponent from './SignupPage';

export default class HomeComponent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="homepage-component">
        <div className="userlogin-container">
          <Pivot linkSize={PivotLinkSize.large}>
            <PivotItem headerText="Login" itemKey="login" >
              <LoginComponent />
            </PivotItem>
            <PivotItem headerText="Sign Up" itemKey="signup">
              <SignupComponent />
            </PivotItem>
          </Pivot>
        </div>

      </div>
    );
  }
}