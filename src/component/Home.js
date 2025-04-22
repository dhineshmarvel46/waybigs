import React from 'react'
import Product from './Product'

function Home({username}) {
  return (
    <div>
  <div className='my-4 fw-bolder text-uppercase ms-2'>Welcome, {username}</div> 
        <div class="position-relative text-center" >
  <img src='https://www.kmart.com.au/wcsstore/Kmart/images/espots/Hot-Wheels-banner-desktop.jpg' className="card-img img-fluid" alt="way bigs hotwheels" style={{ maxHeight: '540px', objectFit: 'cover' }}/>
  <div class="card-img-overlay d-flex justify-content-center align-items-center text-center">
  { /*<div className="px-3 py-2 rounded-3"style={{ backgroundColor: "rgba(255, 255, 255, 0.6)", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
   <h5 className="position-absolute top-0 start-50 translate-middle-x mt-4 fw-bolder text-dark"style={{ zIndex: 1 }}>DURABLE DIE CAST METALS BY <span className='text-danger  fw-bolder'> WAY BIGS</span></h5>
  </div>*/}
  </div>
  
</div>
<Product/>
    </div>
  )
}

export default Home