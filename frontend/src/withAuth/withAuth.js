import React, { Component } from 'react';
import AuthRoutes from '../utils';

//HOC
const withAuth = (AuthComp) => {

  const Auth = new AuthRoutes();
    return class AuthWrapped extends Component {
      constructor(){
        super();
        this.state = {
          user: null
        }
      }
      //Checks for Auth user, if not redirect to home
      componentWillMount(){
        if(!Auth.loggedIn()){
          this.props.history.replace('/login')
        }
        else {
          try {
            const profile = Auth.getUserProfile()
            this.setState({
              user: profile
            })
          }
          catch(err){
            Auth.logout()
            this.props.history.replace('/login')
          }
        }
      }
      render(){
        console.log("History in withAuth ",this.props.history);
        if(this.state.user){
          return (
            <AuthComp history={this.props.history} user={this.state.user} />
          )
        } else {
          return null
        }

      }
    }

}

export default withAuth;
