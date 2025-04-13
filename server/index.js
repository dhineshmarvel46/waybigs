const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel =  require('./models/user')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/user")
 
app.listen(3001, () =>{
    console.log('server is running')

})

app.post('/login',(req,res) => {
    const {email,password} = req.body
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else {
                res.json("wrong password ")
            }
}
        else{
            res.json("invalid email")
        }
})
    .catch(err => res.json(err))

})
app.post('/register',(req,res) => {
    UserModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))

})