import React, { Component } from 'react';
import SuggestedImages from './SuggestedImages';
import Box from 'grommet/components/Box';

class SuggestedImagesContainer extends Component {
  constructor() {
    super();
    this.state={
      suggestedImg:[]
    }
  }

    handleClick=(value)=>{
      console.log(value);
      this.setState({
        isPicAdded: value
      })
      console.log("IS PIC ADDED", this.state.isPicAdded);
      const {user} = this.state
    //  console.log("IS PIC ADDED", this.state.isPicAdded);
      var savedImageData = new FormData();

        savedImageData.append('photos_id', value.id);
        savedImageData.append('user_id',user.id);


    fetch('/savePics', {
      method: 'POST',
      body: savedImageData
    })
    .then(res => res.json())
    .then(data =>{console.log(data)

    })
    .catch(err => console.log(err))

  }


  componentDidMount(){
    const user_id = this.props.user.id

    fetch(`/getSuggested/${user_id}`)
    .then(res => res.json())
    .then(data =>{
    this.setState({suggestedImg:data.pics})
    console.log(data);

    })
    .catch(err => console.log(err))
  }

  render(){
    console.log(this.props.user);
    return(
      <Box
        pad='medium'
        margin='small'
        size='xlarge'
        direction='row'
        wrap={false}>
          <SuggestedImages {...this.props} />
      </Box>
    )
  }
}

export default SuggestedImagesContainer;
