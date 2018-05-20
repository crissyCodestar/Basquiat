import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import LoginFormContent from './LoginForm';


class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      rememberMe:false
    }

  }

  

  toggleRemeberMe(){
    this.setState({ rememberMe: !this.state.rememberMe })
    console.log(this.state.rememberMe);
  }



  render(){
    console.log(this.state.rememberMe);

    return(
      <LoginFormContent
        rememberMe={this.state.rememberMe}
        onChange={()=>{this.toggleRemeberMe}}
        />

    )
  }
}

export default Login;
