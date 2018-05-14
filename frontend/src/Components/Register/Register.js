import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';


class Register extends Component{
  render(){
    return(
      <Form pad='small'>
          <Header>
                <Heading>
                      Sample Header
                </Heading>
          </Header>

            <FormField label='Full Name'>
              <TextInput />
            </FormField>
            <FormField label=' Username'>
              <TextInput />
            </FormField>
            <FormField label='Password'>
              <TextInput />
            </FormField>
            <FormField label='Confirm Password'>
              <TextInput />
            </FormField>
      <Footer pad={{"vertical": "medium"}}>
            <Button label='Submit'
              type='submit'
              primary={true}
              />
      </Footer>
</Form>
    )
  }
}

export default Register;
