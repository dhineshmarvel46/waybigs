import React,{useState,useEffect}from "react"
import { NavLink, useParams } from "react-router-dom"


function Buyproduct({increment}) {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
const getproduct = async () => {
    setLoading(true);
    const response = await fetch('https://mocki.io/v1/1f784910-f512-4ae9-b3b3-432e84fe5ef0');
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
            <div className="container my-5">
            <div className="row g-4 shadow rounded-4 p-4 bg-white align-items-center">

           <div className="col-12 col-md-6 text-center" key={product.id}>
                    <img className="img-fluid rounded" src={product.image} alt={product.title} style={{ maxHeight: "400px",objectFit: "cover", borderRadius: "12px",         // 🧽 Cover to trim awkward spacing
    objectPosition: "center" }} />
                </div>
                <div className="col-12 col-md-6" key={product.id}>
                    <div className="mt-3">
                        <h3 className="text-muted text-uppercase">{product.category}</h3>
                        <h2 className="fw-bold text-dark text-uppercase">{product.title}</h2>
                        <p className="text-uppercase text-secondary">Rating<i className="bi bi-star-fill text-warning"></i> <span className="text-black fw-bold ms-1">4.5</span></p>
                        <h3 className="text-success fw-semibold mt-3">₹{product.price}</h3>
                        <NavLink to={`/cart/${product.id}`} onClick={() => increment(product)} className="btn btn-outline-dark mt-3">Add to Cart</NavLink>
                    </div>
                </div>
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
