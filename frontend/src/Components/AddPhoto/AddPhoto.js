import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';

import axios from 'axios';
import AuthRoutes from '../../utils';
const Auth = new AuthRoutes();




const imageCropper ={
  display: 'inline-block',
    width: '20vw',
    height: 'auto',
    backgroundSize:'cover',
    backgroundPosition:'center center',
    borderRadius: '5%'
}

class AddPhoto extends Component{


  render(){
    console.log(this.props);
    const user = this.props.user
    //const username = user.username

    // console.log(this.state.imagePreviewUrl);
    let {imagePreviewUrl, file} = this.props;
    //console.log(imagePreviewUrl);

        let imagePreview = null;
        if (imagePreviewUrl) {
          imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          imagePreview = (<div>Add Photo</div>);
        }
    return(

      <Box direction='row'
        justify='center'
        align='center'
        wrap={true}
        pad='medium'
        margin='small'
        colorIndex='light-1'>
        <Box>
        <Header>
              <Heading>
                    Photo Add
              </Heading>
        </Header>
        </Box>


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


        <input type='file' name='board_photo' onChange={this.props.handleAddPhotoChange} />
</FormField>

        <FormField label='Caption'>
          <TextInput
              onDOMChange={this.props.handleInfoChange}
              name="captionInput"
              value={this.props.captionInput}/>
        </FormField>
        <FormField label='Location'>
          <TextInput
              onDOMChange={this.props.handleInfoChange}
              name="locationInput"
              value={this.props.locationInput}/>
        </FormField>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Submit'
            type='submit'
            onClick={this.props.submitAddPhoto} />
        </Footer>

      </Box>
    )
  }
}

export default AddPhoto;
