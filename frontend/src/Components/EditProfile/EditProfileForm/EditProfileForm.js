import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

import ProfilePhoto from './ProfilePhoto';
import EditInfo from './EditInfo';


class EditProfileForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      file:"",
      imagePreviewUrl: "",
    }
      this.handleEditChange = this.handleEditChange.bind(this);
  }


  //  componentWillReceiveProps(newProps) {
  //     this.setState({user: newProps.user});
  // }


    handleEditChange(e){
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      console.log(file);


      reader.onloadend = () => {

        this.setState({
          file:file,
          imagePreviewUrl: reader.result
        });

      }
      reader.readAsDataURL(file)
    }



    handleSubmit(e){
      e.preventDefault();

      const {fullNameInput, usernameInput, passwordInput, comfirmPassword, emailInput, redirect} = this.state

    const user = this.props.user
    const pic = this.state.file;

    if(pic == null){
        return alert('No file selected.');
      }

    var formData = new FormData();

    formData.append('file', pic);
    formData.append('username', user.user.username);
    formData.append('user_id',user.user.id);
      fetch('/upload', {
        method: 'POST',
        body: formData,
        full_name: fullNameInput,
        username: usernameInput,
        email: emailInput
     })
     .then(res => {
       console.log(res);


     })
     .then((data) => {
       console.log('success', data);
     })
     .catch((err) => {
        console.log(err);
      })


    }



  render(){

    const user = this.props.user
    const {imagePreviewUrl, file} = this.state;

    return(
      <Box justify='center'
      align='stretch'
      wrap={true}
      pad='medium'
      margin='small'>
      <Header>
        <Heading
        strong='true'
        tag='h3'>
          Edit Profile Info
        </Heading>
      </Header>
      <Box>
        <ProfilePhoto
          handleEditChange={(e)=>{this.handleEditChange(e)}}
         {...this.props}
         {...this.state}/>
      </Box>
      <Box>
        <EditInfo
        handleSubmit={(e)=>this.handleSubmit(e)}
        handleEditChange={(e)=>{this.handleEditChange(e)}}
         user={user}/>

      </Box>
      </Box>
    )
  }
}


export default EditProfileForm;
