const handlesignin=(req,res,posttt,bcrypt)=>{
    const  { email,password }=req.body;
    if(!email||!password){
        return res.status(400).json('unable to signin');
     }

posttt.select('email','hash').from('signin')
.where('email','=',email)
.then(data=>{const isvalid=bcrypt.compareSync(password,data[0].hash);
  if(isvalid)
   {
      return posttt.select('*').from('users')
       .where('email','=',email)
       .then(user=>{res.json(user[0])})
       .catch(err => res.status(400).json('erroo'))
  // res == true
   }
   else{
       res.status(400).json('nooooo')
   }
}
)
.catch(err => res.status(400).json('err'))}
module.exports={
    handlesignin:handlesignin
}