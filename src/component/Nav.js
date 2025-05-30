
import { NavLink } from 'react-router-dom'

function Nav({count,authenticated}) {
   
 
    
 
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-4 shadow-sm">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bolder fs-3" to="/" > WAY BIGS</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to ="/">Home</NavLink>
        </li>
         {authenticated  ? (
        <li className="nav-item">
          <NavLink className="nav-link " to="/Product">Product</NavLink>
        </li> ) : null}
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
       </ul>
      <div className='buttons'>
<NavLink to='/login' className='btn btn-outline-dark'> <i className='fa fa-sign-in me-2'></i>Login</NavLink>
<NavLink to='/register' className='btn btn-outline-dark ms-2'> <i className='fa fa-user-plus me-2 '></i>Register</NavLink>
<NavLink to='/cart' className='btn btn-outline-dark ms-2'> <i className='fa fa-shopping-cart me-2'></i>Cart({count})</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav