import React, { Component } from 'react';
import Explore from './ExploreList/Explore';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import AuthRoutes from '../../../utils';

const Auth = new AuthRoutes();

class ExploreContainer extends Component{
  constructor(){
    super();
      this.state = {
        data:[],
        isPicAdded:null,
      }
  }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.data.length !== )
  // }
  //

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



componentWillMount(){
    const profile = Auth.getUserProfile()
    this.setState({ user: profile })
}

//
// toggleAdd=(value)=>{
//   console.log("value: ",value);
//   this.setState({
//     isPicAdded: value
//   })
//   console.log(value);
//   console.log(this.state);
//   const {user} = this.state
// //  console.log("IS PIC ADDED", this.state.isPicAdded);
//   var savedImageData = new FormData();
//
//     savedImageData.append('photos_id', value.id);
//     savedImageData.append('user_id',user.id);
//
//
// fetch('/savePics', {
//   method: 'POST',
//   body: savedImageData
// })
// .then(res => res.json())
// .then(data =>{console.log(data)
//
// })
// .catch(err => console.log(err))
//
// }




componentDidMount(){
  fetch('/allPhotos')
  .then(res => res.json())
  .then(data =>{
  this.setState({data:data.data})


  })
  .catch(err => console.log(err))
}

render(){
  //  const data = this.state
console.log(this.props);
    const sortData = (a, b)=> {

      let compared = 0;
      if ( b.id > a.id) {
        compared = 1;
      } else if ( b.id < a.id) {
        compared = -1;
      }
      return compared;
    }

return(

  <Box
    pad='medium'
    margin='small'
    size='xlarge'>
        <Explore
        {...this.state}
        handleClick={this.handleClick}
        toggleAdd={this.toggleAdd}
         />

      </Box>

    )
  }
}

export default ExploreContainer;
