import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export const Cart = ({cartdata}) => {
  const [loading,SetLoading] = useState(true);
    const { id } = useParams();
    const[data,setData] = useState([]);

    useEffect (() => {
    const cart = async () => {
      axios.get('http://localhost:3001/cart')
      .then(result => setData(result.data))
      .catch(err => console.log(err))
       SetLoading(false)
    }
  cart();
},[id]) 

const Cartitem = () => {
    return(
      
<>
{data.map(item =>
<div className='col-md-6 d-flex '>
<img  className='ms-5 mb-5' src={item.image} height={200} width={200} alt={item.title}></img>
<h3 className=' ms-5 mt-5'>{item.title}</h3>
</div>

)}

</>

    )
}
  return (
    <div>
        {loading ? null : <Cartitem/>}
    </div>
  )
}
