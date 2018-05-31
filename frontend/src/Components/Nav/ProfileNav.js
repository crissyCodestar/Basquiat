import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import User from 'grommet/components/icons/base/User';
import Image from 'grommet/components/Image';
import SettingsOptionIcon from 'grommet/components/icons/base/SettingsOption';
import VirtualMachineIcon from 'grommet/components/icons/base/VirtualMachine';
import MapIcon from 'grommet/components/icons/base/Map';
import Layer from 'grommet/components/Layer';
import App from 'grommet/components/App';


import EditProfile from '../EditProfile/EditProfile'
import withAuth from '../../withAuth/withAuth';
import AuthRoutes from '../../utils';
const Auth = new AuthRoutes();
//
// import Followers from '../Followers/Followers';
// import Following from '../Following/Following';
// import FeedContainer from '../Boards/ProfileFeedContainer/FeedContainer';
// import Profile from '../Profile/ProfileContainer/ProfileContainer';

class ProfileNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      layerOpen:false
    }
    this.closeEdit = this.closeEdit.bind(this);
    this.openEdit = this.openEdit.bind(this);
  }
  componentWillMount(){
      const profile = Auth.getUserProfile()
      this.setState({ user: profile })
  }

  openEdit(){
    this.setState({ layerOpen: true })
  }

  closeEdit(){
    this.setState({ layerOpen: false })
  }
  render(){
    const {layerOpen, user} = this.state;
console.log(this.state.layerOpen);
console.log(user);
    return(




            <Box flex='grow'
              justify='start'
              colorIndex='light-2'>
              <Header pad='small'
                justify='between'>
                 <Image src={user.profile_pic_url}
                      full='vertical'
                      size='thumb'
                      pad='none'
                      />
                <Anchor
                    size='xsmall'
                    pad='none'
                    path={`/explore`}
                    icon={  <VirtualMachineIcon />} />
                <Anchor icon={  <MapIcon />} />
                <Anchor onClick={this.openEdit} icon={  <SettingsOptionIcon />} />
              </Header>

                    <Menu responsive={true}
                      inline={true}
                      primary={false}
                      closeOnClick={false}
                      size='small'
                      direction='row'>
                        <Anchor path={`/${user.username}/feed`}
                          className='active'>
                          Photos
                        </Anchor>
                        <Anchor path={`/${user.username}/followers`}>
                          Followers
                        </Anchor>
                        <Anchor path={`/${user.username}/following`}>
                          Following
                        </Anchor>
                  </Menu>
                  <EditProfile layerOpen={layerOpen} closeEdit={this.closeEdit} user={user}/>

            </Box>



      )
  }
}

export default ProfileNav;
