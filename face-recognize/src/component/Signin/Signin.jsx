import React from 'react';



class Signin extends React.Component{

  constructor(props){
    super(props);
    this.state={
inputemail:'',
inputpassword:''

    }
  }

  oninputemailchange=(event)=>{
    this.setState({inputemail:event.target.value});
     }

   oninputpasswordchange=(event)=>{
    this.setState({inputpassword:event.target.value});
     }
     
  
     onclicksubmit=()=>{
       fetch('http://localhost:3001/signin',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(
          {
            email:this.state.inputemail,
            password:this.state.inputpassword
        }
      )
       })
       .then(response=>response.json())
       .then(user=>{
         
          if(user.id){
        this.props.updateuser(user)
        this.props.onroutechange('home')

       }})

       //tgrba



      //  fetch('http://localhost:3001/register',{
      //   method:'POST',
      //   headers:{'Content-type':'application/json'},
      //   body: JSON.stringify(
      //     {
      //       email:this.state.inputemail,
      //       password:this.state.inputpassword
      //   }
      // )
      //  })
      //  .then(response=>response.json())
      //  .then(user=>{
      //     if(user.id){
      //   this.props.loaduser(user)
      //   this.props.onroutechange('home')

      //  }})


     }


  render(){
    const{ onroutechange }=this.props;
  
   
    return (

        <article className="br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend
      className="f1 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input
        onChange={this.oninputemailchange}
         className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" 
         type="email" name="email-address"  />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input
        onChange={ this.oninputpasswordchange }
         className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
          type="password" name="password" />
      </div>
    </fieldset>
    <div className="">
      <input  onClick={this.onclicksubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=>onroutechange('register')}  className="f6 link dim black db pointer">Register</p>
    </div>
  </div>
</main>
</article>
    );
  }
}

export default Signin ;
