import React from 'react';
import {Login} from './Login';
import {User} from '../model/Model';
import {AuthService} from '../services/AuthService';


interface AppState{
  user: User | undefined
}

export class App extends React.Component<{}, AppState>{

private authService: AuthService = new AuthService();

  render(){
    return (
      <div>
        <Login authService={this.authService}/>
        <h1>Hello World</h1>
      </div>
    )
  }
}


