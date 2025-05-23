const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel =  require('./models/user')
const CartModel = require('./models/cart')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(cors({
    origin : ['http://localhost:3000'],
    credentials : true
}))
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/user")

const PORT = process.env.PORT || 3001;
 
app.listen(PORT, () =>{
    console.log('server is running')

})

app.post('/login',(req,res) => {
    const {email,password} = req.body
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                const accesstoken = jwt.sign({email},'jwt-access-token-secret-key',{expiresIn: '1m'})
                
                 const refreshtoken = jwt.sign({email},'jwt-refresh-token-secret-key',{expiresIn: '5m'})
                 res.cookie('accesstoken',accesstoken,{maxAge:60000})
                 res.cookie('refreshtoken',refreshtoken,{maxAge:300000,httpOnly:true,secure:true,sameSite:'strict'})
                res.json({message :"success", name : user.name})
                
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
const verifytoken = (req,res,next) =>{
    const accesstoken = req.cookies.accesstoken ;
if(!accesstoken){
const renewed = renewtoken(req, res);
        if (renewed) {
            next();
        } else {
            return res.status(401).json({ valid: false, message: 'No access token' });
        }
}

else{
    jwt.verify(accesstoken,'jwt-access-token-secret-key',(err,decoded) =>{
        if(err){
            return res.json({vaid:false,message:'invaild token'})
        }
        else{
            req.email = decoded.email
            next()
        }
    })
}
}
const renewtoken = (req,res) =>{
    const refreshtoken = req.cookies.refreshtoken ;
    let exit = false
if(!refreshtoken){
return res.json({valid:false,message:'no refreshtoken'})
}
else{
    jwt.verify(refreshtoken,'jwt-refresh-token-secret-key',(err,decoded) =>{
        if(err){
            return res.json({vaid:false,message:'invaild refreshtoken'})
        }
        else{
            const accesstoken = jwt.sign({email: decoded.email},'jwt-access-token-secret-key',{expiresIn: '1m'})
                 res.cookie('accesstoken',accesstoken,{maxAge:60000})
                 exit = true
        }
    })
}
return exit
}

app.get('/product',verifytoken,(req,res) => {
     console.log("product route hit by", req.email);
    return res.json({valid : true ,message : 'authorised'})
})
app.post('/register',(req,res) => {
    UserModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))

}) 

app.post('/buyproduct', async (req,res) => {
    const { product } = req.body;

    try {
      const updatedCart = await CartModel.findOneAndUpdate(
        {}, // no condition for now — assumes one cart
        { $push: { cart: product } },
        { new: true, upsert: true } // upsert = create if not exists
      );
  
      res.json(updatedCart);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
})

app.get('/cart',async (req,res) => {
    try {
        const doc = await CartModel.findOne();
        res.json(doc?.cart || []);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})