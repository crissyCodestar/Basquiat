import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';




class Login extends Component{
  render(){
    return(
      <LoginForm
        logo={<s />}
        title='Sample Title'
        secondaryText='Sample secondary text'
        forgotPassword={<Anchor href='#'
        label='Forgot password?' />}
        rememberMe={true} />

    )
  }
}

export default Login;
