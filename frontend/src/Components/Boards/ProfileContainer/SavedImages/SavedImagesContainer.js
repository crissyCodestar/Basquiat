import React, { Component } from 'react';
import SavedImages from './SavedImages';
import Box from 'grommet/components/Box';

class SavedImagesContainer extends Component {
  constructor() {
    super();
    this.state={
      savedImg:[]
    }
  }



    componentDidMount(){
      const user_id = this.props.user.id

      fetch(`/getSuggested/${user_id}`)
      .then(res => res.json())
      .then(data =>{
      this.setState({savedImg:data.pics})
      console.log(data);

      })
      .catch(err => console.log(err))
    }




  render(){
    return(
      <Box
        pad='medium'
        margin='small'
        size='xlarge'>
          <SavedImages {...this.props}/>
      </Box>
    )
  }
}

export default SavedImagesContainer;
