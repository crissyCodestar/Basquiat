import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import ProfileNav from '../../Nav/ProfileNav';
import Followers from '../../Followers/Followers';
import Following from '../../Following/Following';
import FeedContainer from '../../Boards/ProfileFeedContainer/FeedContainer';




class Profile extends Component{
  constructor(){
    super();
    this.state={

    }
    this.renderProfile = this.renderProfile.bind(this);
  }

  renderProfile(){
    return (
      <div>

          <h1>Profile</h1>
      </div>
    )
  }

  render(){
    return(


      <Switch>
      <Route exact path='/:usernameId' render={this.renderProfile}/>
          <Route path='/:usernameId/feed' component={FeedContainer}/>
          <Route path='/:usernameId/followers' component={Followers}/>
          <Route path='/:usernameId/following' component={Following}/>
      </Switch>

    )
  }
}

export default Profile;
