import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login({username,setUsername}) {
   const [email,setEmail ] = useState('')
    const [password,setPassword ] = useState('')
    const [wrongpassword,setWrongpassword] = useState('')
    const navigate = useNavigate()
    
    axios.defaults.withCredentials = true
    const handlesubmit = (e) => {
      e.preventDefault()
       axios.post('http://localhost:3001/login',{email,password})
          .then( res =>{ console.log(res)
            if(res.data.message === "success"){
            navigate('/product')
           setUsername(res.data.name)  
                      ;}
            else if(res.data === "wrong password "){
setWrongpassword("Wrong Password")
navigate('/')
            }
            else if(res.data === "invalid email"){
              setWrongpassword("invalid email")
              navigate('/')
                          }       
                    })
          .catch(err => console.log(err))
    
    }
  return (
    <div className='d-flex justify-content-center mt-5'>
       
        <form onSubmit={handlesubmit}>
        <h2 className='display-6 fw-bolder  text-uppercase mb-5'> <i className='fa fa-sign-in me-2'></i>Login</h2>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
            value={email}/>
    <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-5">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
            value={password} />
  </div>
  <div className="form-check mt-3">
    <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
    <label className="form-check-label " for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Submit</button>
  <div className='fw-bolder text-danger text-center text-uppercase my-4'>{wrongpassword}</div>
</form>

    </div>
  )
}

export default Login