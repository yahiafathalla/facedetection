import React, { Component } from 'react';
import Navigation from './component/navigation/Navigation';
import Logo from './component/Logo/Logo';
import Imagelinkform from './component/Imagelinkform/Imagelinkform';
import Rank from './component/Rank/Rank';
import Particles from 'react-particles-js';
import Faces from './component/Faces/Faces';
import Signin from './component/Signin/Signin';
import Register from './component/Register/Register';




import './App.css';



 

const particlesoptions={
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 400
      }
    },
    color: {
      value: '#dae3f2'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#dae3f2'
      },
      polygon: {
        nb_sides: 5
      },
  
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: false,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: '#90b1e5',
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    }
}


  
}
const startstate={
  input:'',
  imgurl:'',
  box:{},
  route:'signin',
  issignedin:false,
  users:{
           id:'',
          name:'',
          email:'',
          count:0,
          joined:''
  
  }}
class App extends Component {
  
  constructor(){
    super();
    this.state=startstate;}

updateuser=(user)=>{
  this.setState({
    users:{
      id:user.id,
    name:user.name,
    email:user.email,
    count:user.count,
    joined:user.joined}

  })
}


calculatefacelocation=(data)=>{
  const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('picpic');
  const height = Number(image.height);
  const width = Number(image.width);
  return{
    leftcol:clarifaiFace.left_col*width,
    toprow:clarifaiFace.top_row*height,
    rightcol:width - (clarifaiFace.right_col*width),
    bottomrow:height - (clarifaiFace.bottom_row*height)
   
  }

}

ondisplaybox=(box)=>{
  this.setState({box:box});
}

  oninputchange=(event)=>{
 this.setState({input:event.target.value});
  }

onbuttonsubmit=()=>{
  this.setState({imgurl:this.state.input});
  fetch('http://localhost:3001/imageurl',{
    method:'post',
    headers:{'Content-type':'application/json'},
    body: JSON.stringify(
      {
     input:this.state.input
       
    }
  )
  
   })
   .then(response=>response.json())
.then(response =>
  
  {
    if(response){
    
      fetch('http://localhost:3001/image',{
       method:'put',
       headers:{'Content-type':'application/json'},
       body: JSON.stringify(
         {
          id:this.state.users.id,
          
       }
     )
      })
      .then(response=>response.json())
      .then(count=>{

       this.setState(Object.assign(this.state.users,{count:count}))
       

      })
      .catch(err=>console.log)


  
}
   this.ondisplaybox(this.calculatefacelocation(response))})
.catch(err => console.log(err));
}
  

onroutechange=(route)=>{
  if(route==='signout'){
    this.setState(startstate)
  }
  else if(route==='home')
{
  this.setState({issignedin:true})
}

  this.setState({route:route});
}

  render() {
    return (
      <div className='App'>
      <Particles className='particals'
              params={particlesoptions} />
              <Navigation issignedin={this.state.issignedin} onroutechange={this.onroutechange}/>
              { this.state.route==='home'?
               <div>
               <Logo />
               <Rank name={this.state.users.name}
                    counter={this.state.users.count}
               />
               <Imagelinkform oninputchange={this.oninputchange}
               onbuttonsubmit={this.onbuttonsubmit} />
               <Faces box={this.state.box}  imgurl={this.state.imgurl} />
               </div>:(this.state.route==='signin'?
               <Signin updateuser={this.updateuser}  onroutechange={this.onroutechange}/>:
              <Register updateuser={this.updateuser}   onroutechange={this.onroutechange} />
     )
      
              }
     
      </div>
    );
  }
}

export default App;
