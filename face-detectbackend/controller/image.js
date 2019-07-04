
const Clarifai =require ('clarifai');
const app = new Clarifai.App({
    apiKey: '1787d18abbd7422b9f309a7e94599699'
   });

   const handleapi=(req,res)=>{
       app.models.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
       .then(data=>{
           res.json(data)
       })
       .catch(err=>res.status(400).json('wrrong'))
   }

const handleimage=(req,res,posttt)=>{

    const{ id }=req.body;
    posttt('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries=>{res.json(entries[0]);
    })
    .catch(err=>res.status(400).json('yy'))
}
module.exports={
    handleimage
    ,handleapi
}