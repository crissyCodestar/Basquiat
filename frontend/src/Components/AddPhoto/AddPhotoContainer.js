import React, { Component } from 'react';
import AddPhoto from './AddPhoto';

import Layer from 'grommet/components/Layer';



class AddPhotoContainer  extends Component {
  constructor(){
    super()
    this.state = {
      file:"",
      imagePreviewUrl: "",
      captionInput: "",
      locationInput:"",
      user:null,
      close:false

    }
      this.handleAddPhotoChange = this.handleAddPhotoChange.bind(this);
  }




    handleInfoChange(e){

      const target = e.target;
      const value = target.value;
      const name = target.name;
      this.setState({

        [name]: value
      });

    }

    handleAddPhotoChange(e){
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      //console.log(file);


      reader.onloadend = () => {

        this.setState({
          file:file,
          imagePreviewUrl: reader.result
          });
      }
      reader.readAsDataURL(file)
    }



  submitAddPhoto(e){
    e.preventDefault();

      const {captionInput, locationInput} = this.state
      const {layerOpenPhoto} = this.props
    const user = this.props.user
    const pic = this.state.file;
    //console.log(user);
    if(pic == null){
        return alert('No file selected.');
      }

    var photoData = new FormData();

    photoData.append('file', pic);
    photoData.append('user_id',user.id);
    photoData.append('username',user.username);
    photoData.append('caption', captionInput);
    photoData.append('hashtag', locationInput);
    const config = {
            headers: {
                    'Content-Type': 'multipart/form-data; charset=utf-8; boundary="another cool boundary";'
            }
};

  fetch('/photoUpload', {
    method: 'POST',
    body: photoData,
    config
        })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          imagePreviewUrl: "",
          captionInput: "",
          locationInput:"",
        })
        //Close layer after successful submit
        this.props.closeAddPhoto({ layerOpenPhoto: !this.props.layerOpenPhoto });

      })
      .catch(err => {
        console.log(err);
        this.setState({ message: "Error Inserting User" });
      });

  }


  render(){
    let user = {...this.props}
console.log(user.user.id);
    return(
<div>
    {this.props.layerOpenPhoto ? (
      <Layer closer={true} overlayClose={true} flush={true} onClose={this.props.closeAddPhoto}>
          <span style={{margin:'50px'}}>
              <AddPhoto
              submitAddPhoto={(e)=>this.submitAddPhoto(e)}
              handleInfoChange={(e)=>{this.handleInfoChange(e)}}
              handleAddPhotoChange={(e)=>{this.handleAddPhotoChange(e)}}
             {...this.props}
             {...this.state}/>

          </span>
        </Layer>
     ) : null
   }
      </div>

    )
  }
}

export default AddPhotoContainer;
