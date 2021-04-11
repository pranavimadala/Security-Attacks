import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Stack, IStackTokens, DefaultButton, PrimaryButton, BaseComponent, IBasePickerSuggestionsProps, IPersonaProps, assign, initializeIcons, IBasePicker, Dropdown, NormalPeoplePicker, ValidationState, IDatePickerStrings, mergeStyleSets, DatePicker, Icon, ActionButton, IIconProps, PersonaSize, Persona, } from "office-ui-fabric-react";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { NavLink } from 'react-router-dom';
import ServiceCalls from '../services/ServicesCall';

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
  };

interface IDetailsProps {
    emailId: string,
    password: string,
    userName: string,
    setLoginStatus: any
}

interface IDetailsState{
    resultData: Array<any>
    isLoading: boolean
    isDataPresent:boolean
}
const rowProps: IStackProps = { horizontal: true, verticalAlign: 'center' };

const spinnerTokens = {
    sectionStack: {
        childrenGap: 10,
    },
    spinnerStack: {
        childrenGap: 20,
    },
};
export default class DetailsComponent extends React.Component<IDetailsProps, IDetailsState> {
   
    _service: ServiceCalls = new ServiceCalls();
    constructor(props: IDetailsProps) {
        super(props);
        window.history.pushState("", "", "/details");

        this.state = {
            resultData: [],
            isLoading: true,
            isDataPresent:true
        }
        if (this.props.userName == "") {

            var query: string = "select * from c where c.EmailId='" + this.props.emailId + "' and c.Password='" + this.props.password + "'";
            this._service.getLoginInfo(query).then((data: Array<any>) => {
                console.log(data)
                this.setState({
                    resultData: data,
                    isDataPresent:data.length>0?true:false
                }, () => this.setState({
                    isLoading: false
                }))
            })
        }
        else {
            var login: any = {
                EmailId: this.props.emailId,
                Password: this.props.password,
                UserName: this.props.userName,
                Type: "Login"
            }
            this._service.addLoginEntry(login);
        }
    }
    render() {
        return (
            <div className="details-container">{
                !this.state.isLoading && this.state.isDataPresent ?
                    <div>
                        <div>
                        <h1 className="parallel-containers">Welcome</h1>
                        <NavLink to="/studentregistration" className="button-link parallel-containers"  >
                            <PrimaryButton iconProps={{ iconName: 'ChevronLeft' }} text="Student Info Registration Page" className=" add-subscription-button" onClick={() => this.props.setLoginStatus(true)} />
                            </NavLink>
                            </div>
                    {
                        this.props.userName == "" ?
                            this.state.resultData.map((item) => 
                                <div>
                                    <h3>User Details</h3>
                                    <p> UserName: {item.UserName}</p>
                                    <p>EmailId: {item.EmailId}</p>
                                </div>
                            
                            )
                            :
                            <div>
                                <p>UserName:{this.props.userName}</p>
                                <p>EmailId:{this.props.emailId}</p>
                            </div>
                    }
                </div>
                    : this.state.isDataPresent ?
                    <div>
                        <Stack {...rowProps} tokens={spinnerTokens.spinnerStack}>
                            <Label>Fetching data..</Label>
                            <Spinner size={SpinnerSize.large} />
                        </Stack>
                        </div>
                        :
                        <div>
                            <h1>Entered details are wrong..</h1>
                            <h3>Please click on the below link to navigate back</h3>
                            <NavLink to="/" className="button-link"  >
                                <PrimaryButton iconProps={{ iconName: 'ChevronLeft' }} text="Login Page" className=" add-subscription-button" onClick={() => this.props.setLoginStatus(true)}/>
                            </NavLink>
                        </div>
            }      </div>
            );
    }
}