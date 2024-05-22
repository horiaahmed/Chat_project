const express=require("express")
const cors=require("cors")
const axios = require("axios");

const app=express()
app.use(express.json())
app.use(cors({origin:true}))


app.post("/authentication",async(req,res)=>{
    const {username}=req.body
    const {secret}=req.body
    try{
        const r=await axios.put("https://api.chatengine.io/users/",
            {username:username,secret:username,first_name:username},
            {headers:{"Private-Key":"98f70da6-917c-4102-8dc9-1a9ec6bc4441"}})
        return res.status(r.status).json(r.data)

    }
    catch (e) {
        return res.status(e.response.status).json(e.response.data);
        } 
})



const port=3000
app.listen(port,()=>{
    console.log(`app listen to ${port}`)
})
