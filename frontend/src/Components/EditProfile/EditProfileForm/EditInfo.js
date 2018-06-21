import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';


class EditInfo extends Component {
  constructor() {
    super();
    this.state = {

    }
  }



  // handleSubmit(e){
  //   e.preventDefault();
  //   const {fullNameInput, usernameInput, emailInput} = this.state
  // }



  render(){

    const user = this.props.user

    console.log(user);
    return(

<Box
justify='center'
align='stretch'
wrap={true}
pad='none'
margin='none'>
      <Form pad='none'>
      <Header>
        <Heading
        strong='true'
        tag='h5'>
          User Description:
        </Heading>
      </Header>
      <FormField>
      <TextInput
          name="descriptionInput"
          defaultValue={user.user.descriptionInput}
          onDOMChange={this.props.handleEditValues}
          />
      </FormField>
      <Header>
        <Heading
        strong='true'
        tag='h5'>
          User Info:
        </Heading>
      </Header>
      <FormField>
      <TextInput
          name="usernameInput"
          defaultValue={user.user.username}
          value={this.props.username}
          onDOMChange={this.props.handleEditValues}
          />
      </FormField>
      <FormField>
      <TextInput
          name="fullNameInput"
          defaultValue={user.user.full_name}
          value={this.props.fullNameInput}
          onDOMChange={this.props.handleEditValues}
          />
      </FormField>
      <FormField>
      <TextInput
          name="emailInput"
          defaultValue={user.user.email}
          value={this.props.fullNameInput}
          onDOMChange={this.props.handleEditValues}
          />
      </FormField>
      <Footer pad={{"vertical": "medium"}}>
        <Button label='Submit'
          type='submit'

          onClick={this.props.handleSubmit} />

      </Footer>
    </Form>
</Box>


    )
  }
}

export default EditInfo;
