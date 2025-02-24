import React from 'react'
import Product from './Product'

function Home() {
  return (
    <div>
        <div class="card text-bg-dark" >
  <img src='https://www.kmart.com.au/wcsstore/Kmart/images/espots/Hot-Wheels-banner-desktop.jpg' class="card-img" alt="way bigs hotwheels" height='540px'/>
  <div class="card-img-overlay d-flex flex-row justify-content-center">
   <h5 class="card-title display-6 text-dark fw-bold ">DURABLE DIE CAST METALS BY <span className='text-danger  fw-bolder'> WAY BIGS</span></h5>
  </div>
</div>
<Product/>
    </div>
  )
}

export default Home