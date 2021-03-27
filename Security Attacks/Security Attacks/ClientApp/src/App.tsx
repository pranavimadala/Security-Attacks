import React from 'react';
import './App.css';
import HomeComponent from './LoginComponent/HomeComponent';

export default class App extends React.Component<{}, {}> {
  render(){
    return(
       <HomeComponent/>
    );
}
}
