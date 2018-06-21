import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Header from 'grommet/components/Heading';
import Label from 'grommet/components/Label';



const Feed = ({pics, user}) => {
  console.log(user)

return(
  <Box>

  <Header>
  {user.username}'s Feed
  </Header>
    <Columns
      pad='none'
      size='small'
      align='start'
      justify='between'
      wrap={'true'}>
    {pics.map(pic => (
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
    ))}
  </Columns>
  </Box>

)
}


export default Feed;
