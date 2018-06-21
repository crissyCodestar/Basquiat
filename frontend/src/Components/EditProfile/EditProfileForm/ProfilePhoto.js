import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';

import axios from 'axios';
import AuthRoutes from '../../../utils';
const Auth = new AuthRoutes();
// const fileStyle = {
//   opacity: '0',
//   overflow: 'hidden'
// }
/*
TODO: Finish upadting user info through seperate hsndle target value
Allow user to save profile info and update user info immediatly
Get and set JWT token
*/

const avatar = {
objectFit: 'cover'
}

const imageCropper ={
  display: 'inline-block',
  position: 'relative',
    width: '11vw',
    height: '11vw',
    overflow: 'hidden',
    borderRadius: '50%'
}

class ProfilePhoto extends Component{


  render(){
    const user = this.props.user
    const username = user.user.username

    // console.log(this.state.imagePreviewUrl);
    let {imagePreviewUrl, file} = this.props;
    console.log(imagePreviewUrl);

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
        pad='none'
        margin='none'>
        <Header>
          <Heading
          strong='true'
          tag='h5'>
            User Description:
          </Heading>
        </Header>
               <FormField
               pad='medium'
               justify='center'
               align='center'
                label='Choose Profile Picture'>
                <Box
                pad='none'
                justify='center'
                align='center'
                 style={imageCropper}>

                     {imagePreview}
                     </Box>

                     <input type='file' name='profile_pic' onChange={this.props.handleEditChange} />
              </FormField>
      </Box>
    )
  }
}

export default ProfilePhoto;
