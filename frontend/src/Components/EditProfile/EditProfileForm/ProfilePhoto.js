import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import axios from 'axios';
// const fileStyle = {
//   opacity: '0',
//   overflow: 'hidden'
// }

const avatar = {
  display: 'block',
   margin: '0',
   height: '100%',
   maxWidth: 'auto',
   backgroundSize:'cover',
   backgroundPosition:'center center'
}

const imageCropper ={
  display: 'inline-block',
  position: 'relative',
    width: '7vw',
    height: '7vw',
    overflow: 'hidden',
    borderRadius: '50%'
}

class ProfilePhoto extends Component{
  constructor() {
    super();
    this.state={
      file:"",
      imagePreviewUrl: ""
    }
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(e){
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



onSubmitImage(e){
  e.preventDefault();


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

 })
 .then((res) => {
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
    console.log(this.props);
    const user = this.props.user
    const username = user.user.username
    // console.log(this.state.imagePreviewUrl);
    let {imagePreviewUrl, file} = this.state;
    console.log(file);
        let imagePreview = null;
        if (imagePreviewUrl) {
          imagePreview = (<img style={avatar} src={imagePreviewUrl} />);
        } else {
          imagePreview = (<img style={avatar} src={user.user.profile_pic_url} />);
        }
    return(

      <Box direction='row'
        justify='start'
        align='center'
        wrap={true}
        pad='medium'
        margin='small'
        colorIndex='light-1'>
        <div style={imageCropper}>
        {imagePreview}
        </div>
        <button
            type="submit"
            onClick={(e)=>this.onSubmitImage(e)}>Upload Image</button>
          <input type='file' name='profile_pic' onChange={(e)=>this.handleImageChange(e)} />

      </Box>
    )
  }
}

export default ProfilePhoto;
