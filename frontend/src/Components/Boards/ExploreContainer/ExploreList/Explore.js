import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Header from 'grommet/components/Header';
import Label from 'grommet/components/Label';
import FormCheckmarkIcon from 'grommet/components/icons/base/FormCheckmark';
import FormAddIcon from 'grommet/components/icons/base/FormAdd';
import '../../../../Styles/BoardStyle.css'

class Explore extends Component{

  render(){
    console.log(this.props.data);
    console.log(this.props);
    const pics = this.props.data

    return(
<Box
  align='start'
  pad='none'
  justify='center'>
      <Header>
          <Heading
            strong='true'
            tag='h2'>
                Explore
          </Heading>
      </Header>
      <Box
        pad='small'
        margin='none'
        align='center'
        justify='start'
        direction='row'
        wrap={true}
        >

        { pics ?
          pics.map(pic => (
            <Box
              size='small'
              pad='none'
              justify='center'
              key={pic.id}
              >
                <Box
                className="image">
                  <Image
                    className="object-fit_cover"
                    src={pic.photo_url}
                    full={true}
                    value={pic.id}
                    onClick={(() => this.props.handleClick(pic))}
                     />
                     </Box>
                     <Box
                     justify='start'
                     align='end'
                     margin='none'
                     pad='none'
                     onClick={(() => this.props.toggleAdd(pic))}
                     >
                      {
                        this.props.isPicAdded ?  <FormCheckmarkIcon /> :  <FormAddIcon />
                      }



                     </Box>


                        <Paragraph
                        strong='true'
                        pad='none'
                        margin='none'
                        size='small'>
                            {pic.caption}
                        </Paragraph>

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
          🙈 Oh no!!! We need you guys to add pics
          </Heading>
          </Box>
        }
        </Box>
</Box>
    )
  }
}

export default Explore;
