import React, { Component } from 'react';
import EditProfileForm from './EditProfileForm/EditProfileForm';

import Layer from 'grommet/components/Layer';



class EditProfile  extends Component {
  constructor(){
    super()
    this.state = {

    }

  }


  render(){
    let user = {...this.props}

    return(
<div>
    {this.props.layerOpen ? (
      <Layer closer={true} overlayClose={true} flush={true} onClose={this.props.closeEdit}>
          <span style={{margin:'50px'}}>
              <EditProfileForm  user={user}/>
          </span>
        </Layer>
     ) : null
   }
      </div>

    )
  }
}

export default EditProfile;
