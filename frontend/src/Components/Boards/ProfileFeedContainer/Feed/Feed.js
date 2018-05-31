import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';

const Feed = () => (


<Columns masonry={true}
  size='medium'
  justify='center'>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    Box 1
  </Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    Box 2
  </Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    Box 3
  </Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    Box 4
  </Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    Box 5
  </Box>
  <Box align='center'
    pad='medium'
    margin='small'
    colorIndex='light-2'>
    Box 6
  </Box>
</Columns>
)
