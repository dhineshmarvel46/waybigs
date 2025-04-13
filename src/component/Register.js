import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const [name,setName ] = useState('')
  const [email,setEmail ] = useState('')
  const [password,setPassword ] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputvalue,setInputvalue] = useState('')
  const navigate = useNavigate()
   
  const handlesubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      setInputvalue("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setInputvalue("Passwords do not match or filled");
      return; // Prevent form submission if passwords don't match
    }

    setInputvalue('')
    
    axios.post('http://localhost:3001/register',{name,email,password})
    .then( result =>{ console.log(result)
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login');})
    .catch(err => console.log(err))

  
  }

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <form onSubmit={handlesubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center display-6 fw-bolder  text-uppercase mb-5">Sign Up</h3>

        <div className="form-group mb-4">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPasswordInput"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <div className="form-group form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheck"
          />
          <label className="form-check-label" htmlFor="termsCheck">
            I agree to the Terms and Conditions
          </label>
        </div>
        <div>
        <p className='text-center text-danger fw-bold my-1'> {inputvalue}</p> </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
      
    </div>
  )
}

export default Register