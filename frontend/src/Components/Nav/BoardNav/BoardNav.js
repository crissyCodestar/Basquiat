import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import BoardInfo from './BoardInfo/BoardInfo';
import AuthRoutes from '../../../utils';
const Auth = new AuthRoutes();

class BoardNav extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
      const profile = Auth.getUserProfile()
      this.setState({ user: profile })
  }


  render(){
    const {layerOpen, user} = this.state;

    return(

            <Box
              justify='start'
              pad='none'
              colorIndex='light-2'>
                  <BoardInfo user={user} />

            </Box>



      )
  }
}

export default BoardNav;
