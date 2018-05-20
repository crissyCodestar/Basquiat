import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';


class RegisterForm extends Component {
  constructor() {
    super();
  }
 render(){
   return(
     <Form pad='small'>
       <Header>
             <Heading>
                   Sample Header
             </Heading>
       </Header>

         <FormField label='Full Name'>
           <TextInput
               onDOMChange={this.props.handleRegValues}
               name="fullNameInput"
               value={this.props.fullNameInput}/>
         </FormField>
         <FormField label=' Username'>
           <TextInput
               onDOMChange={this.props.handleRegValues}
               name="usernameInput"
               value={this.props.usernameInput}/>
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
           primary={true}
           onClick={this.props.submitRegForm}
           />
   </Footer>
</Form>)


 }

};

export default RegisterForm;
