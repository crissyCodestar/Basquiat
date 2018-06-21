import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


import LoginFormContent from './LoginForm';
import AuthRoutes from '../../utils'
import Layer from 'grommet/components/Layer';
import Anchor from 'grommet/components/Anchor';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';



class Login extends Component{
  constructor(){
    super();
    this.state={
      rememberMe:false,
      signinActive: false
    }
    this.handleLoginValues = this.handleLoginValues.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
    this.onSigninOpen =  this.onSigninOpen.bind(this);

    this.Auth = new AuthRoutes();
  }


  componentWillMount(props){
    console.log(props)
    if(this.Auth.loggedIn())
      this.props.history.replace('/');
  }

  handleLoginValues(e){

    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onSigninOpen(){
    this.setState({ signinActive: true })
  }

submitLoginForm( e){

    e.preventDefault();
    const {usernameInput, passwordInput} = this.state
    console.log("signup", this.state.usernameInput);

    this.Auth.login(
        usernameInput,
        passwordInput
      )
      .then(res => {
        console.log(res);
        //If success user is redirected to explore page
        const usernameId = res.user.username
      this.props.history.replace(`/${usernameId}`)


      })
      .catch(err => {
        console.log(err);
        this.setState({ usernameInput: "", passwordInput: "", message: "Error Inserting User" });
      });

  }


  render(){
    console.log(this.state.signinActive);
    (this.state.signinActive) ?
            (  <Layer closer={true}
                  overlayClose={true}
                  onClose={()=> {this.setState({signinActive:false})}}
                   style={{margin:'50%'}}>
              </Layer>
            ) : (null)
    return(

        <Section>
            <LoginFormContent
            submitLoginForm={this.submitLoginForm}
            handleLoginValues={(e) => {this.handleLoginValues(e)}}
            />
            <Heading strong={true}
              tag='h4'
              uppercase={false}
              truncate={false}
              align='start'
              margin='small'>
            Not a member? <Anchor href='/signup'>
            Sign up
            </Anchor>
            </Heading>

        </Section>
    )
  }
}

export default Login;
