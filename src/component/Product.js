import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Product({setAuthenticated}) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchval, setSearchval] = useState('');
  const[focused, setFocused] = useState(false);
  let componentmounted = true;
const navigate = useNavigate()
axios.defaults.withCredentials = true
axios.get('http://localhost:3001/product')
.then(result => { if(result.data.valid){console.log(result.data.message);setAuthenticated(true)} else{navigate('/');console.log('unauthorised');setAuthenticated(false)} })
.catch(err => {console.log(err)})
  useEffect(() => { 
    
    const getproduct = async () => {
      
 setLoading(true);
const response = await fetch("https://mocki.io/v1/1f784910-f512-4ae9-b3b3-432e84fe5ef0");
if(componentmounted){
  setData(await response.clone().json());
  setFilter(await response.json());
  setLoading(false);
  console.log(filter)
}

    return () => {
      componentmounted = false;
    }
    }
    getproduct();
  },[]);

  const Loading = () =>{
    return(<>
      <div className='col-md-4'>
      <Skeleton height={350}/>
      </div>
      <div className='col-md-4'>
      <Skeleton height={350}/>
      </div>
      <div className='col-md-4'>
      <Skeleton height={350}/>
      </div>
      <div className='col-md-4'>
      <Skeleton height={350}/>
      </div>
      <div className='col-md-4'>
      <Skeleton height={350}/>
      </div>
      </>
    )
  }                                    
  const filterproduct = (category) => {                                          
    const newFilter = data.filter((product) => product.category.toLowerCase().includes(category.toLowerCase().trim())); 
    setFilter(newFilter);      
  }

  const searchfilter = (category) => {
    const newFilter = data.filter((product) =>  product.category.toLowerCase().includes(category.toLowerCase().trim()));
    setFilter(newFilter);
  }
  const handleSubmit = (e) => {
    e.preventDefault(); /// Prevents form submission  
    searchfilter(searchval);
    setSearchval('');
    setFocused(false)
    
  };
  


  const ShowProducts = () => {
    return(<div className=' me-2 mb-5 pb-7 '>
    <div className='buttons d-flex flex-wrap gap-2 justify-content-center mb-5 pb-5 '>
<button className='btn btn-outline-dark mb-2 me-3 text-center' onClick={() => setFilter(data)}>All cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Ford cars")}>Ford cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Nissan cars")}>Nissan cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Toyota cars")}>Toyota cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Bmw cars")}>Bmw cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Fantacy cars")}>Fantacy cars</button>
</div>

<div className="container mb-5">
    <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit}> 
            <div className="row g-2">
                <div className="col-12 col-md-9">
                    <input className="form-control form-control-lg " value={searchval}  onChange={(e) => setSearchval(e.target.value)} type="text" placeholder="Example Nissan cars" aria-label="Search" autoFocus={focused}  onClick={() => setFocused(true)}/>
                    
               </div>

               <div className="col-12 col-md-3 d-grid">
                       <button className="btn btn-primary px-4" type="submit" >
                            <i className="fa fa-sign-in me-2"></i> Enter
                        </button> </div>
              
                </div>
            </form>
        </div>
    </div>
</div>
 

<div className='container'>
<div className='row'>
{filter.map((product) => {
  return(
  
  <div className='col-12 col-sm-6 col-md-4 mb-4'key={product.id}>
  <div className="card h-100 text-center p-4"> 
  <img src={product.image} className="card-img-top img-fluid object-fit-contain" alt={product.title}  style={{ height: '240px', width: '100%', objectFit: 'contain' }}   />
  <div className="card-body">
    <h5 className="card-title text-center mb-0">{product.title.substring(0,12)}</h5>
    <p className="card-text mt-3">₹{product.price}</p>
    <NavLink to={`/buyproduct/${product.id}`} className="btn btn-primary">BUY Now</ NavLink>
  </div>
</div>
  </div>
  )
})} </div> </div>

</div> 
)}
  return (
    <div>
      <div className='container my-3 my-md-5 py-3 py-md-5'>
<div className='row'>
  <div className='col-12 mb-5'> 
<h1 className='display-6 fw-bolder text-center'>LATEST PRODUCTS</h1>
<hr/>
  </div>
</div>
<div className='d-flex justify-content-center'>
{loading ? <Loading />: <ShowProducts/>}
</div>
<div className='d-flex justify-content-center'>
  {filter.length > 0 ? null : <p className='text-danger fw-bolder display-6'>No Results Found</p>}
</div>
      </div>
    </div>
  )
}

export default Product
