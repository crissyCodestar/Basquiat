import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

import RegisterForm from './RegisterForm';

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      fullNameInput: "",
      usernameInput:"",
      emailInput: "",
      passwordInput: "",
      confirmPassword: "",
      message: "",
      redirect:false
    }
    this.submitRegForm = this.submitRegForm.bind(this);
  }



    handleRegValues(e){

      const target = e.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

  submitRegForm(e){
e.preventDefault();
const {fullNameInput, usernameInput, passwordInput, comfirmPassword, emailInput, redirect} = this.state
console.log("signup", this.state.emailInput);

    axios.post("/signup", {

      full_name: fullNameInput,
      username: usernameInput,
      password: passwordInput,
      email: emailInput
      })
      .then(res => {
        console.log(res);
        this.setState({
          redirect: true,
          fullNameInput: "",
          usernameInput: "",
          passwordInput: "",
          emailInput: "",
          message: "Inserted User"
          });

      })
      .catch(err => {
        console.log(err);
        this.setState({ usernameInput: "", passwordInput: "", message: "Error Inserting User" });
      });

  }


  render(){
    console.log(this.state.redirect);
    if(this.state.redirect){
      return <Redirect to={{pathname: '/login' }}/>
    }
    return(
      <RegisterForm
      submitRegForm={this.submitRegForm}
      handleRegValues={(e) => {this.handleRegValues(e)}}/>
    )
  }
}

export default Register;
