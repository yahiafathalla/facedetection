import React from 'react';



 class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
inputname:'',
inputemail:'',
inputpassword: ''

    
    }
  }

  onnamechange=(event)=>{
    this.setState({inputname:event.target.value})

  }
  onemailchange=(event)=>{
    this.setState({inputemail:event.target.value})

  }

  onpassword=(event)=>{
    this.setState({inputpassword:event.target.value})

  }
  onregistersubmit=()=>{
    fetch('http://localhost:3001/register',{
      method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(

          {
            name:this.state.inputname,
            email:this.state.inputemail,
            password:this.state.inputpassword
          }
        )
        


    })
    .then(response=>response.json())
          //parameter user is name and email and pass above          
    .then(user=>{if(user.id)//parameter
      {
                            //parameter
      this.props.updateuser(user);
      this.props.onroutechange('home');

    }})

  }
   render(){
    return (

        <article className="br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend
      className="f1 fw6 ph0 mh0">Register</legend>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input
        onChange={this.onnamechange}
         className=
     "pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
         type="name" name="name"  id="name"/>
      </div>
      <div
       onChange={this.onemailchange}
       className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
         type="email" name="email-address"  id="email-address"/>
      </div>
      <div
       onChange={this.onpassword}
       className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" 
        type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input  onClick={this.onregistersubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    </div>
   
  </div>
</main>
</article>
    );
  }
}

export default Register ;
