import React from 'react'

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <form style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center display-6 fw-bolder  text-uppercase mb-5">Sign Up</h3>

        <div className="form-group mb-4">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
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
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPasswordInput"
            placeholder="Confirm Password"
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

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register