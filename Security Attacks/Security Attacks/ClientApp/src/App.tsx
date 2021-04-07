import React from 'react';
import './App.css';
import Layout from './Layout';
import HomeComponent from './LoginComponent/HomeComponent';

export default class App extends React.Component<{}, {}> {
  render(){
      return (
          <Layout />
    );
}
}
