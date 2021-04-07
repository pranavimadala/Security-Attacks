import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react';
import ServiceCalls from '../services/ServicesCall';

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
  };

interface IDetailsProps {
    emailId: string,
    password: string,
    userName: string,
}

interface IDetailsState{
    resultData: Array<any>
    isLoading:boolean
}

export default class DetailsComponent extends React.Component<IDetailsProps, IDetailsState> {
    _service: ServiceCalls = new ServiceCalls();
    constructor(props: IDetailsProps) {
        super(props);
        this.state = {
            resultData: [],
            isLoading:true
        }
        if (this.props.userName == "") {

            var query: string = "select * from c where c.EmailId='" + this.props.emailId + "' and c.Password='" + this.props.password + "'";
            this._service.getLoginInfo(query).then((data: any) => {
                console.log(data)
                this.setState({
                    resultData: data
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
            <div>{
                !this.state.isLoading &&
                <div>
                    <h1>Welcome</h1>
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
            }      </div>
            );
    }
}