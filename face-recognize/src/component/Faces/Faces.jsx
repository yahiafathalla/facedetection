import React, { Component } from 'react';
import './faces.css';

 class Faces extends Component {
  render(){
  const { imgurl } = this.props;
  const{ box } = this.props;
  
    return (
      <div className='center ma'>
      <div className='absolute mt2'>
      <img id='picpic' alt=''src={imgurl} width='500px' height='auto' />
      <div className='bounding_box' style={{left:box.leftcol,top:box.toprow,right:box.rightcol,bottom:box.bottomrow}}></div>
      </div>
      </div>
    )
  
}
}
export default Faces;
