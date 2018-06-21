import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import AuthRoutes from '../../../utils';
import ProfileNav from '../../Nav/ProfileNav/ProfileNav';
import Followers from '../../Followers/Followers';
import Following from '../../Following/Following';
import BoardNav from '../../Nav/BoardNav/BoardNav'
import SavedImagesContainer from './SavedImages/SavedImagesContainer'
import SuggestedImagesContainer from './SuggestedImages/SuggestedImagesContainer'
import FeedContainer from '../../Boards/ProfileFeedContainer/FeedContainer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
const Auth = new AuthRoutes();


class Profile extends Component{
  constructor(){
    super();
    this.state={
      user:null
    }
    this.renderProfile = this.renderProfile.bind(this);
  }

    componentWillMount(){
        const profile = Auth.getUserProfile()
        this.setState({ user: profile })
    }



    toggleAdd=(value, user)=>{
      console.log(value, user);


    //  console.log("IS PIC ADDED", this.state.isPicAdded);
      var savedImageData = new FormData();

        savedImageData.append('img', value);
        // savedImageData.append('user_id',user.id);
        // savedImageData.append('username',user.username);

    fetch('/savePics', {
      method: 'POST',
      //body:
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    }

    //
    // handleSavedImages(){
    //   if()
    //   fetch('/savePics', {
    //     method: POST,
    //   })
    //   .then(res => res.json()
    //   )
    //   .then(data => console.log(data);
    //   )
    //   .catch(err => console.log(err);)
    //
    // }

  renderProfile(){
    return (
      <Box>


                <Box
                  justify='center'
                  align='start'
                  pad='medium'>
                      <SavedImagesContainer />
                </Box>
                <Box
                  justify='center'
                  align='start'
                  pad='medium'>
                      <SuggestedImagesContainer />
                </Box>


      </Box>
    )
  }

  render(){
console.log(this.props);
const {user}=this.state
    return(

      <Box>
      <BoardNav />


      <Switch>
          <Route exact path='/:usernameId' render={this.renderProfile}/>
          <Route path='/:usernameId/feed' render={() => <FeedContainer {...this.state} {...this.props} />} />
          <Route path='/:usernameId/followers' render={() => <Followers {...this.state} {...this.props} />}/>
          <Route path='/:usernameId/following' component={Following}/>
          <Route path='/:usernameId/saved' component={Following}/>

      </Switch>

      </Box>

    )
  }
}

export default Profile;
