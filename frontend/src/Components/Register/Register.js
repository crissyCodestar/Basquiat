import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Box from 'grommet/components/Box';

import RegisterForm from './RegisterForm';
import ApiRoutes from '../../utils/apiRoutes';
const Api = new ApiRoutes();


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
      file:"",
      profileQuoteInput:"",
      imagePreviewUrl: "",
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


    handleEditChange(e){
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      console.log(file);


      reader.onloadend = () => {

        this.setState({
          file:file,
          imagePreviewUrl: reader.result,
        });

      }
      reader.readAsDataURL(file)
    }


submitRegForm(e){
    e.preventDefault();
    const {fullNameInput,file, usernameInput, passwordInput, comfirmPassword,profileQuoteInput,imagePreviewUrl, emailInput, redirect} = this.state

    console.log("imagePreviewUrl ",imagePreviewUrl);

    const pic = this.state.file;

    if(pic == null){
        return alert('No file selected.');
      }

    var formData = new FormData();

    formData.append('file', file);
    formData.append('full_name', fullNameInput);
    formData.append('username', usernameInput);
    formData.append('password', passwordInput);
    formData.append('email', emailInput);
    formData.append('profile_quote', profileQuoteInput);

    const config = {
            headers: {
                    'Content-Type': 'multipart/form-data; charset=utf-8; boundary="another cool boundary";'
            }
};

    // axios.post("/signup", {
    //
    //   full_name: fullNameInput,
    //   username: usernameInput,
    //   password: passwordInput,
    //   email: emailInput,
    //   profile_quote: profileQuoteInput,
    //    formData,
    //
    //   })

  fetch('/signup', {
    method: 'POST',
    body: formData,
    config
        })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data = 200){
          this.setState({
            redirect: true,
            message: "Inserted User"
            });
        }


      })
      .catch(err => {
        console.log(err);
        this.setState({ usernameInput: "", passwordInput: "", message: "Error Inserting User" });
      });

  }


//
// submitRegForm(e){
//
//     e.preventDefault();
//     const {fullNameInput, usernameInput, passwordInput, comfirmPassword, emailInput, redirect} = this.state
//     console.log("signup", this.state.usernameInput);
//
//     Api.register(
//       fullNameInput,
//       usernameInput,
//       passwordInput,
//       emailInput
//       )
//       .then(res => {
//         console.log(res);
//         //If success user is redirected to explore page
//
//
//
//       })
//       .catch(err => {
//         console.log(err);
//         this.setState({ usernameInput: "", passwordInput: "", message: "Error Inserting User" });
//       });
//
//   }

  render(){
    console.log(this.state.redirect);
    if(this.state.redirect){
      return <Redirect to={{pathname: '/login' }}/>
    }
    return(


      <RegisterForm
      submitRegForm={this.submitRegForm}
      handleRegValues={(e) => {this.handleRegValues(e)}}
      handleEditChange={(e)=>{this.handleEditChange(e)}}
       {...this.props}
       {...this.state}
/>


    )
  }
}

export default Register;
