import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';




class LoginFormContent extends Component{
  render(){
    return(
      <LoginForm
        logo={<s />}
        title='Sample Title'
        secondaryText='Sample secondary text'
        usernameType='text'
        forgotPassword={<Anchor href='#'
        label='Forgot password?' />}
        rememberMe={'false'}
      />

    )
  }
}

export default LoginFormContent;
