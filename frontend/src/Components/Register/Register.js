import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

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
      message: ""
    }
    this.submitRegForm = this.submitRegForm.bind(this);
  }



    handleRegValues(e){

      const target = e.target;
      const value = target.value;
      const name = target.name;
  console.log(value);
      this.setState({
        [name]: value
      });
    }

  submitRegForm(e){
e.preventDefault();
const {fullNameInput, usernameInput, passwordInput, comfirmPassword, emailInput} = this.state
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
          registered: true,
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
    console.log(this.state.registered);
    if(this.state.registered){
      <Redirect to='/login'/>
    }
    return(
      <RegisterForm
      submitRegForm={this.submitRegForm}
      handleRegValues={(e) => {this.handleRegValues(e)}}/>
    )
  }
}

export default Register;
