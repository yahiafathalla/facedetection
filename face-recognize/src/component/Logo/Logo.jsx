import React, { Component } from 'react';
import Tilt from 'react-tilt';
import eye from'./eye.jpg';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div className='ma4 nt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150, reverse:true,speed:600,scale:2 }} >
 <div className="Tilt-inner pa3"> <img style={{paddingTop:'5px'}} alt='logo'src={eye} /></div>
</Tilt>
      </div>
    )
  }
}
export default Logo;
