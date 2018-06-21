import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';

import Image from 'grommet/components/Image';
import SettingsOptionIcon from 'grommet/components/icons/base/SettingsOption';
import VirtualMachineIcon from 'grommet/components/icons/base/VirtualMachine';
import App from 'grommet/components/App';
import AddChapterIcon from 'grommet/components/icons/base/AddChapter';
import HomeIcon from 'grommet/components/icons/base/Home';

import EditProfile from '../../../EditProfile/EditProfile';
import AddPhotoContainer from '../../../AddPhoto/AddPhotoContainer';


const avatar = {
objectFit: 'cover'
}

const imageCropper ={
  display: 'inline-block',
  position: 'relative',
    width: '11vw',
    height: '11vw',
    overflow: 'hidden',
    borderRadius: '50%'
}

class ProfileInfo extends Component {
constructor(props){
  super(props);
  this.state = {
    layerOpen:false,
    layerOpenPhoto: false
  }
  this.closeEdit = this.closeEdit.bind(this);
  this.openEdit = this.openEdit.bind(this);
  this.closeAddPhoto = this.closeAddPhoto.bind(this);
  this.openAddPhoto = this.openAddPhoto.bind(this);

}

  componentWillReceiveProps(nextProps) {
     if(this.props.user!== nextProps.user) {
         this.setState(nextProps.user);
     }
  }

    openEdit(){
      this.setState({ layerOpen: true })
    }

    closeEdit(){
      this.setState({ layerOpen: false })
    }

    openAddPhoto(){
      this.setState({ layerOpenPhoto: true })
    }

    closeAddPhoto(){
      this.setState({ layerOpenPhoto: false })
    }


  render(){
    const {layerOpen,layerOpenPhoto} = this.state;
    const { user } = this.props;
    return(
      <Box flex='grow'
        justify='center'
        pad='large'
        size='small'
        align='center'
        colorIndex='light-2'>
        <Header pad='small'
          justify='start'>

        <Anchor
            size='xsmall'
            pad='none'
            path={`/${user.username}`}>
            <Box
            pad='none'
            justify='center'
            align='center'
             style={imageCropper}>
            <Image src={user.profile_pic_url}
                 full='vertical'
                 size='small'
                 pad='none'
                 style={avatar}
                 />
                 </Box>
            </Anchor>

        </Header>
        <Box
        wrap={true}
        size='medium'
        align='center'
        >
        <Heading
          tag='h2'
          align='center'>
            @{`${user.username}`}
          </Heading>
        </Box>
        <Box
        wrap={true}
        size='large'

        align='center'
        >
        <Heading
          tag='h6'

          align='start'>
          {user.profile_quote}
        </Heading>
        </Box>
        <Menu responsive={true}
          inline={true}
          primary={false}
          closeOnClick={false}
          size='small'
          justify='between'
          direction='row'>
        <Anchor
            size='xsmall'
            pad='none'
            path={`/explore`}
            icon={  <VirtualMachineIcon />} />

      <Anchor
          size='xsmall'
          pad='none'
          path={`/${user.username}/feed`}
          icon={  <HomeIcon />} />

        <Anchor onClick={this.openAddPhoto} icon={  <AddChapterIcon />} />
        <Anchor onClick={this.openEdit} icon={  <SettingsOptionIcon />} />
        </Menu>

            <AddPhotoContainer layerOpenPhoto={layerOpenPhoto} closeAddPhoto={this.closeAddPhoto} user={user}/>
            <EditProfile layerOpen={layerOpen} closeEdit={this.closeEdit} user={user}/>

      </Box>
    )
  }
}
export default ProfileInfo;
