import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';




class LoginFormContent extends Component{
  render(){
    return(


                <Form pad='small'>
                  <Header>
                        <Heading>
                              Login
                        </Heading>
                  </Header>
                    <FormField label=' Username'>
                      <TextInput
                          onDOMChange={this.props.handleLoginValues}
                          name="usernameInput"
                          value={this.props.usernameInput}/>
                    </FormField>
                    <FormField label='Password'>
                      <TextInput
                          onDOMChange={this.props.handleLoginValues}
                          name="passwordInput"
                          value={this.props.passwordInput}/>
                    </FormField>
                    <Footer pad={{"vertical": "medium"}}>
                        <Button label='Cancel'
                          type='cancel'
                          primary={true}
                          onClick={this.props.cancelLoginForm}
                          />
                          <Button label='Submit'
                            type='submit'
                            primary={true}
                            onClick={this.props.submitLoginForm}
                            />
                    </Footer>
              </Form>



    )
  }
}

export default LoginFormContent;
