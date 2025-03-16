import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [searchval, setSearchval] = useState();
  const[focused, setFocused] = useState(false);
  let componentmounted = true;

  useEffect(() => { 
    const getproduct = async () => {
 setLoading(true);
const response = await fetch("https://mocki.io/v1/399fea99-4641-4900-b583-d2bd279180fb");
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
    const newFilter = data.filter((product) => product.category === category);
    setFilter(newFilter);
  }

  const searchfilter = (category) => {
    const newFilter = data.filter((product) => product.search === category.toLowerCase());
    setFilter(newFilter);
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form submission
    searchfilter(searchval);
    setSearchval('');
    
  };
  


  const ShowProducts = () => {
    return(<div className=' me-2 mb-5 pb-7 '>
    <div className='buttons d-flex  justify-content-center mb-5 pb-5 '>
<button className='btn btn-outline-dark mb-2 me-3 text-center' onClick={() => setFilter(data)}>All cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Ford cars")}>Ford cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Nissan cars")}>Nissan cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Toyota cars")}>Toyota cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Bmw cars")}>Bmw cars</button>
<button className='btn btn-outline-dark mb-2 me-3 text-center'onClick={() => filterproduct("Fantacy cars")}>Fantacy cars</button>
</div>

<div class="container mb-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form class="d-flex" onSubmit={handleSubmit}> 
                <div class="input-group">
                    <input class="form-control form-control-lg " value={searchval}  onChange={(e) => setSearchval(e.target.value)} type="text" placeholder="Search" aria-label="Search" autoFocus={focused}  onClick={() => setFocused(true)}/>
                    <button class="btn btn-primary px-4" type="submit" tabindex="-1">
                            <i className="fa fa-sign-in me-2"></i> Enter
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
 


<div className='row'>
{filter.map((product) => {
  return(
  
  <div className='col-md-4  mb-4'>
  <div class="card h-100 text-center p-4 me-2 "key={product.id}> 
  <img src={product.image} class="card-img-top" alt={product.title} height ="250px"   />
  <div class="card-body">
    <h5 class="card-title text-center mb-0">{product.title.substring(0,12)}</h5>
    <p class="card-text mt-3">₹{product.price}</p>
    <NavLink to={`/buyproduct/${product.id}`} className="btn btn-primary">BUY Now</ NavLink>
  </div>
</div>
  </div>
  )
})} </div>

</div> 
)}
  return (
    <div>
      <div className='container my-5 py-5'>
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
