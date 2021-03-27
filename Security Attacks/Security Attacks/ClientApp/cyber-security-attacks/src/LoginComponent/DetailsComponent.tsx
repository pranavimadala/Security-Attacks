import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton } from 'office-ui-fabric-react';

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
  };

interface IDetailsState{
    emailId:string,
    password:string
}

export default class DetailsComponent extends React.Component<{}, IDetailsState> {
    
}