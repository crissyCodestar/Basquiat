import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import ProfilePhoto from './ProfilePhoto';


const EditProfileForm = ({user}) => (
  <Box justify='center'
  align='stretch'
  wrap={true}
  pad='medium'
  margin='small'
  colorIndex='light-1'>
  <ProfilePhoto user={user}/>
  <Box direction='row'
    justify='center'
    align='center'
    wrap={true}
    pad='medium'
    margin='small'
    colorIndex='light-1'>
    <Value value={2} />
  </Box>
  <Box direction='row'
    justify='start'
    align='center'
    wrap={true}
    pad='medium'
    margin='small'
    colorIndex='light-1'>
    <Value value={3}
      colorIndex='accent-1' />
  </Box>
  <Box direction='row'
    justify='start'
    align='center'
    wrap={true}
    pad='medium'
    margin='small'
    colorIndex='light-1'>
    <Value value={4} />
</Box>
  </Box>
)


export default EditProfileForm;
