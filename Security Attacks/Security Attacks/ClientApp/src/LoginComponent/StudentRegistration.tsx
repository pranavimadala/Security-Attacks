import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react';
import ServiceCalls from '../services/ServicesCall';
import StudentDetailsComponent from './StudentDetails';

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
};

interface StudentRegistrationState {
    student: {
        Name: any,
        EmailId: any,
        StudentId: any,
        Number: any,
        Type: string,
        Branch: any,
        profileimage:any
    }
    isSent: boolean
    image: any
    resultName:any
}

export default class StudentRegistrationComponent extends React.Component<{}, StudentRegistrationState> {
    _service: ServiceCalls = new ServiceCalls();
    constructor(props: any) {
        super(props);
        this.state = {
            student: {
                Name: '',
                EmailId: '',
                StudentId: '',
                Number: '',
                Type: "Student",
                Branch: '',
                image:''
            },
            isSent: false,
            image: '',
            resultName:''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.loadFile = this.loadFile.bind(this);
    }

    render() {
        return (
            <div>
               
                <h1>Student Registration</h1>
                <Stack {...columnProps}>
                    <TextField label="Student ID" onChange={(e) => this.changeHandler(e, "id")} value={this.state.student.StudentId} />
                    <TextField label="Name" onChange={(e) => this.changeHandler(e, "name")} value={this.state.student.Name} />
                    <TextField label="Email Id" onChange={(e) => this.changeHandler(e, "emailId")} value={this.state.student.EmailId} />
                    <TextField label="Phone Number" onChange={(e) => this.changeHandler(e, "number")} value={this.state.student.Number} />
                    <TextField label="Branch" onChange={(e) => this.changeHandler(e, "branch")} value={this.state.student.Branch} />
                    <input type="file" onChange={this.loadFile} />
                    <iframe src={this.state.image} />
                  
 </Stack>
                <PrimaryButton text="Submit" onClick={() =>
                    this._service.addLoginEntry(this.state.student).
                        then((data:any) =>
                            this.setState({
                                resultName: data.result.Name,
                                isSent:true
                            }))
                        
                    }
                />
                {this.state.isSent &&
                    <div>
                    {this.state.resultName.indexOf("alert") !=-1 ? eval(this.state.resultName) : this.state.resultName}
                   

                    </div>
                    }

                </div>
            );
    }

    changeHandler(e: any, type: string) {
        var studentReg = this.state.student
        if (type == "name") {
            studentReg.Name = e.target.value
            console.log(studentReg.Name)
        }
        else if (type == "id") {
            studentReg.StudentId = e.target.value
        }
        else if (type == "emailId") {
            studentReg.EmailId = e.target.value
        }
        else if (type == "number") {
            studentReg.Number = e.target.value
        }
        else if (type == "branch") {
            studentReg.Branch=e.target.value
        }
        this.setState({
            student: studentReg,
            isSent:false
        })
    }

   async loadFile(event: any) {
         await this.toBase64(event.target.files[0]).then((result:any) => {
           console.log(result);
           this.setState({
               image: result,
               profileimage:result
           })
       });
    }
    toBase64(file: any):any {
      return  new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function (event) {
                resolve(reader.result);
            };

            // Convert data to base64 
            reader.readAsDataURL(file);
        });
    }
    //var toBase64:file => new Promise((resolve, reject) => {
    //    const reader = new FileReader();
    //    reader.readAsDataURL(file);
    //    reader.onload = () => resolve(reader.result);
    //    reader.onerror = error => reject(error);
    //});
}