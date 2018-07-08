import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Box from 'grommet/components/Box';




const avatar = {
  display: 'block',
   margin: '0',
   height: '100%',
   width: '100%',
   backgroundSize:'cover',
   backgroundPosition:'center center'
}

const imageCropper ={
  display: 'inline-block',
  position: 'relative',
    width: '11vw',
    height: '11vw',
    overflow: 'hidden',
    borderRadius: '50%'
}

class RegisterForm extends Component {
  constructor() {
    super();
  }
 render(){
   console.log(this.props);
     let {imagePreviewUrl, file} = this.props;
   let imagePreview = null;
   if (imagePreviewUrl) {
     imagePreview = (<img style={avatar} src={imagePreviewUrl} />);
   } else {
     imagePreview = (<img style={avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrpZvpAPVd9QClgACJbYwfvVAorICjupXudzTQMbplv3x1zSU" />);
   }
   return(
     <Box direction='row'
       justify='start'
       align='center'
       wrap={true}
       pad='large'
       margin='small'
       size='large'
       colorIndex='light-1'>
       <Box>
       <Header>
             <Heading>
                   Register
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

             <input type='file' name='profile_pic' onChange={this.props.handleEditChange} />
             </FormField>

         <FormField label='Full Name'>
           <TextInput
               onDOMChange={this.props.handleRegValues}
               name="fullNameInput"
               value={this.props.fullNameInput}/>
         </FormField>
         <FormField label='Username'>
           <TextInput
               onDOMChange={this.props.handleRegValues}
               name="usernameInput"
               value={this.props.usernameInput}/>
         </FormField>
         <FormField label='Quote'>
           <TextInput
               onDOMChange={this.props.handleRegValues}
               name="profileQuoteInput"
               value={this.props.profile_quote}/>
         </FormField>
         <FormField label='Email'>
           <TextInput
               onDOMChange={this.props.handleRegValues}
               name="emailInput"
               value={this.props.emailInput}/>
         </FormField>
         <FormField label='Password'>
           <TextInput
               onDOMChange={this.props.handleRegValues}
               name="passwordInput"
               value={this.props.passwordInput}/>
         </FormField>
   <Footer pad={{"vertical": "medium"}}>
         <Button label='Submit'
           type='submit'
           primary={false}
           onClick={this.props.submitRegForm}
           />
   </Footer>
</Box>
)


 }

};

export default RegisterForm;
