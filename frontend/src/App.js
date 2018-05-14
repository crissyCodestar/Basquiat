import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Components/Home/HomeContainer/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Explore from './Components/Boards/ExploreContainer/ExploreContainer';
import ProfileContainer from './Components/Profile/ProfileContainer/ProfileContainer';
import Nav from './Components/Nav/Nav';
import App from 'grommet/components/App';

import './App.css';

class App extends Component {
  render() {
    return (
      <App>
        <Nav/>
      <Switch>
          <Route strict exact path='/' component={Home}/>
          <Route path='/signup' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/explore' component={Explore}/>
          <Route path='/:username' component={ProfileContainer}/>
      </Switch>
      </App>
    );
  }
}

export default App;
