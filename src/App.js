import React , {useEffect,useContext} from 'react';
//import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { Routes,Route} from 'react-router-dom';
import './styles.css'
import Newsletter from './Components/Newsletter/Newsletter';
import Cart from './Pages/Cart/Cart';
import Categories from './Components/Categories/CategoryItem'
import SingleProductdetails from './Pages/Products/SingleProductdetails';
import ProductCard from './Components/Product/ProductCard';
import Products from './Pages/Products/Products';
import { lazy } from 'react';
import { Suspense } from 'react';
import { ProdContext } from './Context/ProdContext';  
import Modal from './Components/OrderModal/Modal';
import Payment from './Pages/Checkout/Payment';
import { auth } from './Context/Utils/firebase';
import TrendsProducts from './Pages/Home/TrendsProducts';


const ProductsByCategoryLists = lazy(() => import('./Pages/Products/ProductByCategoryLists'));

function App() {

  const{setUser,setProducts,filteredProducts}=useContext(ProdContext)
    useEffect(()=>{fetch('https://fakestoreapi.com/products')
                  .then(res=>res.json())
                  .then(json=>setProducts(json))},[])

    useEffect(() => {
      auth.onAuthStateChanged(authUser =>{
        if(authUser){
          setUser(authUser)
        }else{
        setUser(null)
        }
      })
    }, [])

  
  return (  
   <Suspense fallback={<div>....Loading</div>}>
   <div className="App">                
              <Header />
              <Navbar />            
              <Routes> 
                    <Route path='/' element={<Home />}>                     
                       <Route path='categories' element={<Categories />}/>                                                                      
                    </Route> 
                     <Route path='deals' element={<TrendsProducts  />} />
                     <Route path='products/category/:category' element={<ProductsByCategoryLists />}  />
                     <Route path='productcard' element={<ProductCard />} />                         
                     <Route path='/products/:id' element={<SingleProductdetails />} />                        
                     <Route path='register'   element={<Register />} />   
                     <Route path='login' element={<Login />}  />
                     <Route path='cart'   element={<Cart />} />  
                     <Route path='products'   element={<Products />} /> 
                     <Route path='modal'   element={<Modal/>}  />           
                     <Route path='payment'   element={<Payment/>}  />        
                    
              </Routes>
              <Newsletter />
                   
     
    </div>
</Suspense>   
  );
}

export default App;
