import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Header from 'grommet/components/Heading';
import Label from 'grommet/components/Label';

import Heading from 'grommet/components/Heading';


const Feed = ({pics, user}) => {
  console.log(user)

return(
  <Box>

  <Header>
        <Heading
        strong='true'
        tag='h3'
        uppercase='true'>
{user.username} Pics
  </Heading>
</Header>
    <Columns
      pad='none'
      size='small'
      align='start'
      justify='between'
      wrap={'true'}>
    {
      pics ?
      pics.map(pic => (
      <Box align='center'
        pad='none'
        margin='small'
        size='small'
        key={pic.id}
        >
        <Image
          src={pic.photo_url}
          full={true} />

            <Label
            margin='none'
            justify='start'
            align='start'
            size='small'>
              {pic.caption}
            </Label>
      </Box>
    ))
    : <Box
    pad='none'
    margin='none'
    >
    <Heading
    strong='true'
    tag='h2'
    align='center'
    margin='large'>
        Start by adding some awesome pics 😉
    </Heading>
    </Box>
  }
  </Columns>
  </Box>

)
}


export default Feed;
