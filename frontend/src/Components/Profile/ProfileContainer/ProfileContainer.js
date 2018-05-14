import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Followers from '../../Followers/Followers';
import Following from '../../Following/Following';
import FeedContainer from '../../Boards/FeedContainer/FeedContainer'



class ProfileContainer extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <Switch>
          <Route path='/:username/feed' component={FeedContainer}/>
          <Route path='/:username/followers' component={Followers}/>
          <Route path='/:username/following' component={Following}/>
      </Switch>
    )
  }
}

export default ProfileContainer;
