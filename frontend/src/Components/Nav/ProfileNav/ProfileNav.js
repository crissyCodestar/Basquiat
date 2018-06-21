import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import withAuth from '../../../withAuth/withAuth';
import AuthRoutes from '../../../utils';
const Auth = new AuthRoutes();

class ProfileNav extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
      const profile = Auth.getUserProfile()
      this.setState({ user: profile })
  }


 componentWillReceiveProps(nextProps) {
   console.log(nextProps);
     if(this.props.user!== nextProps.user) {
         this.loadUserProfile(nextProps.user);
     }
 }


  render(){
    const {layerOpen, user} = this.state;
    console.log("Props from profile nav: ",this.props);
    return(

            <Box flex='grow'
              justify='start'
              colorIndex='light-2'>
                  <ProfileInfo user={user} />

            </Box>



      )
  }
}

export default ProfileNav;
