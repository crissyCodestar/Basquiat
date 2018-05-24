import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import User from 'grommet/components/icons/base/User';


import withAuth from '../../withAuth/withAuth';
import AuthRoutes from '../../utils';
const Auth = new AuthRoutes();
//
// import Followers from '../Followers/Followers';
// import Following from '../Following/Following';
// import FeedContainer from '../Boards/ProfileFeedContainer/FeedContainer';
// import Profile from '../Profile/ProfileContainer/ProfileContainer';

class ProfileNav extends Component {
  constructor(){
    super();

  }
  componentWillMount(){
      const profile = Auth.getUserProfile()
      this.setState({usernameId: profile.username})
  }

  render(){
    const {usernameId } = this.state;
    return(


      <Sidebar colorIndex='neutral-1'
        size='small'>
        <Header pad='medium'
          justify='between'>
          <Button icon={<User />} />
        </Header>
            <Box flex='grow'
              justify='start'>
                    <Menu responsive={true}
                      inline={true}
                      primary={false}
                      closeOnClick={false}
                      size='small'
                      direction='row'>
                        <Anchor path={`/${usernameId}/feed`}
                          className='active'>
                          Pro Pic
                        </Anchor>
                        <Anchor path={`/${usernameId}/followers`}>
                          Followers
                        </Anchor>
                        <Anchor path={`/${usernameId}/following`}>
                          Following
                        </Anchor>
                  </Menu>
            </Box>

</Sidebar>

      )
  }
}

export default ProfileNav;
