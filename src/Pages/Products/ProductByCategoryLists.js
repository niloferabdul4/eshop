import React,{useState,useEffect,useContext} from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../Components/Product/ProductCard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { mobile, tab } from '../../Responsive';

const ProductsContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(380px,1fr));   
    grid-template-rows: repeat(auto-fit,minmax(600px,1fr));           
    grid-column-gap:10px;
    grid-row-gap: 60px;
    justify-content: center;    
    padding: 40px 30px; 
    margin:60px;
    ${mobile({display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',
        gridTemplateRows:'repeat(auto-fit,minmax(360px,1fr))',
        gridColumnGap:'1px',
        gridRowGap:'4px',
        alignItemS:'center',
        margin:'2px',padding:'10px 0px'})}

${tab({display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
        gridTemplateRows:'repeat(auto-fit,minmax(360px,1fr))',
        gridColumnGap:'1px',
        gridRowGap:'4px',
        alignItemS:'center',
        margin:'2px',padding:'10px 0px'})}
   
   
`

const Button=styled.div`
        height:40px;
        width:150px;
        border-radius: 6px;
        border:none;
        background-color: white;
        border:0.05px solid lightgrey;
        font-size: 1.05rem;       
        cursor: pointer;
        align-items: center;
        font-weight: 400;       
        margin: 30px;
        padding: 10px; 
        transition   : all 0.2s ease;
        ${mobile({width:'120px',fontSize:'0.96rem'})}
        
`  

const ProductsByCategoryLists = () => {


  const [categoryProd,setCategoryProd]=useState([])
  const location=useLocation()
  const category=location.pathname.split('/')[3]
  const navigate=useNavigate()

  useEffect(()=>{fetch( `https://fakestoreapi.com/products/category/${category}`)
                    .then(res=>res.json())
                    .then(json=>setCategoryProd(json))},[])

                    /*
                    useEffect(()=>{
                        const categoryProduct=products.find(item=>item.category===category)
                        setCategoryProd(categoryProduct)
                        // if prod does not exist redirect to products page//
                        if(!categoryProd)
                        {
                            navigate('/products')
                        }
                   
                  },[category]);
                  */
               
    return (
        <div>         
              <Button id='back' onClick={() => navigate(-1)}>{`<< Go Back`}</Button>    
              <ProductsContainer>

                        {categoryProd.map(item=>{return <ProductCard key={item.id} prod={item}
                                                                 />  
                    })
                    }   

                </ProductsContainer>
       



            
                         
        </div>
    );
}

export default ProductsByCategoryLists;




