import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Link, Redirect} from 'react-router-dom';

import AuthRoutes from '../../utils';
import withAuth from '../../withAuth/withAuth';
import Login from '../Login/Login';
import ProfileNav from './ProfileNav';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Section from 'grommet/components/Section';
import MenuIcon from 'grommet/components/icons/base/Menu';
import App from 'grommet/components/App';

const Auth = new AuthRoutes();


class Nav extends Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      signinActive: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.Auth = new AuthRoutes();
  }



    handleLogout(){
      Auth.logout();
      return <Redirect to='/'/>
    }


  render(){
      return(
        <Menu responsive={true}
          icon={<MenuIcon />}
          inline={false}
          primary={true}
          size='small'>
          <Anchor path={'/'}
            className='active'>
          Home
          </Anchor>
          <Anchor path={'/explore'}>
            explore
          </Anchor>
          {
            Auth.loggedIn() ?
            <Anchor path={`/`}  onClick={this.handleLogout}>
              Logout

            </Anchor>
          :
          <Anchor path={"/login" }>
          Sign In/Sign Up
          </Anchor>
        }
        </Menu>
      )


  }

}

export default withRouter(Nav);
