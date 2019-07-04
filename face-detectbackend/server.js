const express=require('express');
const bodyparser=require('body-parser');
const bcrypt = require('bcrypt-nodejs');
//for localhost
const cors = require('cors');
//to connect database
const knex = require('knex');
const register=require('./controller/register');
const signin=require('./controller/signin');
const profile=require('./controller/profile');
const image=require('./controller/image');

const posttt=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'yaya',
      database : 'eyecanseeu'
    }
  });

const app =express();
 app.use(bodyparser.json());
 app.use(cors());


 app.get('/', (req, res)=> { res.send(posttt.users) })

//sigin in 
app.post('/signin',(req,res)=>{
  signin.handlesignin(req,res,posttt,bcrypt)
})



//register
app.post('/register',(req,res)=>{
    register.handleregister(req,res,bcrypt,posttt)

})

//get username based on id that match id from user to id in db
app.get('/profile/:id',(req, res)=>{
   profile.handleprofile(req,res,posttt)
    
})

      

//ranking

app.put('/image',(req, res)=>{
    image.handleimage(req,res,posttt)   
  }
)
app.post('/imageurl',(req, res)=>{
    image.handleapi(req,res)   
  }
)
      

app.get('/',(req,res)=>console.log(res.send(database.users)))
app.listen(3001)
