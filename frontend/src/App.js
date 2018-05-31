import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import AuthRoutes from './utils';
import ProfileNav from './Components/Nav/ProfileNav';
import Home from './Components/Home/HomeContainer/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Explore from './Components/Boards/ExploreContainer/ExploreContainer';
import Profile from './Components/Profile/ProfileContainer/ProfileContainer';
import Nav from './Components/Nav/Nav';

import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';


// import App from 'grommet/components/App';
const Auth = new AuthRoutes();

class App extends Component {

  render() {
    //console.log(Auth.getUserProfile());
    return (

  <Article
    pad={{ horizontal:'large'}}
    margin={{ horizontal:'large', vertical: 'none', top: 'small'}}
    scrollStep={false}>
        <Section pad='small'
          justify='start'
          align='end'>
              <Headline
              pad={{ right:'large'}}>
                        <Nav/>
              </Headline>
        </Section>
        <Section
          pad={{ horizontal:'large'}}
          justify='center'
          align='start'
          margin={{ horizontal:'large'}}
          >
          <Headline margin='none'>
                      <Split flex='right'
                        separator={true}
                        showOnResponsive='both'>

                              {Auth.loggedIn() ?
                                <Box
                                  justify='center'
                                  align='center'
                                  pad='small'>
                                  <ProfileNav {...this.props}/>
                                  </Box>: null
                              }

                            <Box
                              justify='center'
                              align='center'
                              pad='medium'>
                                    <Switch>
                                        <Route strict exact path='/' component={Home}/>
                                        <Route path='/signup' component={Register}/>
                                        <Route path='/login' component={Login}/>
                                        <Route path='/explore' component={Explore}/>
                                        <Route path='/:usernameId' component={Profile}/>
                                    </Switch>
                              </Box>
                    </Split>
              </Headline>
        </Section>
    </Article>
    );
  }
}

export default App;
