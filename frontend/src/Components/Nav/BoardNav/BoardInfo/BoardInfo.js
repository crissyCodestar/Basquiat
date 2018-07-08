import React,{Component} from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import AppsIcon from 'grommet/components/icons/base/Apps';
import FavoriteIcon from 'grommet/components/icons/base/Favorite';
import MapLocationIcon from 'grommet/components/icons/base/MapLocation';

const BoardInfo = ({user}) => (
  <Box flex='grow'
    justify='center'
    pad='none'
    size='small'
    align='center'
    colorIndex='light-2'>
    <Menu responsive={true}
        inline={true}
        primary={false}
        direction='row'
        >
        <Anchor
            size='xsmall'
            pad='none'
            path={`/${user.username}`}
            icon={  <AppsIcon /> } />
            <Anchor
                size='xsmall'
                pad='none'
                path={`/${user.username}/following`}
                icon={  <FavoriteIcon /> } />
                <Anchor
                    size='xsmall'
                    pad='none'
                    path={`/${user.username}/saved`}
                    icon={  <MapLocationIcon /> } />
      </Menu>

  </Box>
)

export default BoardInfo
