import React, { Component } from 'react';



 class Navigation extends Component {
 
   
  render() {
    const { onroutechange }=this.props;
    const{ issignedin }=this.props;

   if(issignedin) 
    { 
    return (
  <nav style={{display:'flex',justifyContent:'flex-end'}}>
 <p onClick={()=>onroutechange('signout')} className='f3 link dim black underline pointer b pr3'>SignOut</p>
  </nav>
  
    
  )}
  else
  {
    
    return (
      <nav style={{display:'flex',justifyContent:'flex-end'}}>
     <p onClick={()=>onroutechange('signin')} className='f3 link dim black underline pointer b pr3'>Signin</p>
     <p onClick={()=>onroutechange('register')} className='f3 link dim black underline pointer b pr3'>Register</p>
      </nav>
        )

  }
  }
}
export default Navigation ;
 
