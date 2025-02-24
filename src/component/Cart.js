import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
export const Cart = ({cartdata}) => {
    const { id } = useParams();
    const[data,setData] = useState([]);
const [loading,SetLoading] = useState(false);
    useEffect (() => {
    const cart = async () => {
    SetLoading(true);
    const response = await fetch('https://mocki.io/v1/a580e31c-8c68-4f73-a8be-8f9bc9af1cae');
    const json = await response.json();
    const filtercart = json.find(item => item.id === parseInt(id));
    setData([filtercart]);
    SetLoading(false); }
  cart();
},[id])

const Cartitem = () => {
    return(
      
<>
{cartdata.map(item =>
<div className='col-md-6 d-flex '>
<img  className='ms-5 mb-5' src={item.image} height={200} width={200} alt={data.title}></img>
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
