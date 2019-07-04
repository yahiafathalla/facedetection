const handleprofile=(req,res,posttt)=>{

    const{ id }=req.params;
    posttt.select('*').from('users').where({id})
    .then(user=>{
        if(user.length){
    res.json(user[0])
}
else{(res.status(400).json('kkkkkkkkkk'))}
}

)
.catch(err=>res.status(400).json('nnnnn'))

}
module.exports={
    handleprofile
}