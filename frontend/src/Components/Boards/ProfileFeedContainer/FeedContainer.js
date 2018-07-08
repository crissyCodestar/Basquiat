import React, { Component } from 'react';
import Feed from './Feed/Feed';
import Box from 'grommet/components/Box';



class FeedContainer extends Component {
  constructor() {
    super();
    this.state = {
      data:[]
    }
   }



componentDidMount(){
  const user_id = this.props.user.id

  fetch(`/getUserPhotos/${user_id}`)
  .then(res => res.json())
  .then(data =>{
  this.setState({data:data.pics})
  console.log(data.pics);

  })
  .catch(err => console.log(err))
}


  render(){
    console.log(this.props.user.id);
    return(
      <Box
        pad='medium'
        margin='small'
        size='xlarge'>
        <Feed pics={this.state.data} user={this.props.user}/>
      </Box>
    )
  }
}

export default FeedContainer;
