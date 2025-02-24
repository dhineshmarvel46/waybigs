import React,{useState,useEffect}from "react"
import { NavLink, useParams } from "react-router-dom"


function Buyproduct({increment}) {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
const getproduct = async () => {
    setLoading(true);
    const response = await fetch('https://mocki.io/v1/a580e31c-8c68-4f73-a8be-8f9bc9af1cae');
    const data = await response.json();
    console.log(typeof(id))
    const selectedProduct = data.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
    setLoading(false);
    
  }
  getproduct();
    },[id])

    const ShowProducts = () => {
        return(
            <>
           <div className="col-md-6" key={product.id}>
                    <img className="mt-5 ms-5" src={product.image} alt={product.title} height={450} width={450} />
                </div>
                <div className="col-md-6 mt-5 me-5" key={product.id}>
                    <div className="mt-3">
                        <h3 className="mb-3 text-secondary text-uppercase">{product.category}</h3>
                        <h2 className="text-uppercase display-6">{product.title}</h2>
                        <p className="text-uppercase text-secondary">Rating<i className="fa fa-star ms-2 text-black">4.5</i></p>
                        <h3 className="mt-3">₹{product.price}</h3>
                        <NavLink to={`/cart/${product.id}`} onClick={() => increment(product)} className="btn btn-outline-dark mt-3">Add to Cart</NavLink>
                    </div>
                </div>
            </>

        )
    }

   const Loading = () =>{
    return(
        <>
        <div className="d-flex justify-content-center">Loading.....</div>
        </>
    )
   } 
  return (
    <div>
<div className='d-flex justify-content-center'>
{loading ? <Loading />: <ShowProducts/>}
</div>
    </div>
  )
}

export default Buyproduct