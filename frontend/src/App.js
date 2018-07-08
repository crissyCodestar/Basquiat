import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import AuthRoutes from './utils';
import ProfileNav from './Components/Nav/ProfileNav/ProfileNav';
import Home from './Components/Home/HomeContainer/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ExploreContainer from './Components/Boards/ExploreContainer/ExploreContainer';
import Profile from './Components/Boards/ProfileContainer/ProfileContainer';
import Nav from './Components/Nav/Nav';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import Title from 'grommet/components/Title';

import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import './App.css'
import logo from './Graphics/LogoWFB.png'
// import App from 'grommet/components/App';
const Auth = new AuthRoutes();

class App extends Component {
  render() {
    return (

  <Article
    pad={{ horizontal:'medium'}}
      className="App-Bg"
    margin={{ horizontal:'small', vertical: 'none', top: 'small'}}
    scrollStep={false}>

  <Header
  size='medium'>
  <Title
  flex={true}
    justify='start'
    direction='row'
    >
  <Anchor
  href='#'
    path='/' >
    <Image className="App-header" size='thumb' src={logo} />
    </Anchor>

  </Title>

  <Box flex={true}
    justify='end'
    direction='row'
    responsive={false}>

      <Nav/>
  </Box>
</Header>
        <Section

          pad={{ horizontal:'large'}}
          justify='center'
          align='center'
          margin={{ horizontal:'small'}}
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
                                  <ProfileNav />
                                  </Box>: null
                              }

                            <Box
                              justify='center'
                              align='center'
                              pad='medium'
                              size='xlarge'>
                                    <Switch>
                                        <Route strict exact path='/' component={Home}/>
                                        <Route path='/signup' component={Register}/>
                                        <Route path='/login' component={Login}/>
                                        <Route path='/explore' component={ExploreContainer}/>
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
