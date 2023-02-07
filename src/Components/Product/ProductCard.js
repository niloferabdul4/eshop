import React from 'react';
import StarRating from '../Rating/Rating';
import {ProductContainer,Image,Title,InfoContainer,Price,Rating}from './ProductCardStyle';
//import { useParams } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import AddToCartButton from '../AddToCart Button/AddToCartButton';

const ProductCard = ({prod}) => { 

    const navigate=useNavigate();
    //const {id}=useParams()

 // const [products,setProducts]=useState({})
    return (  
   <>
                <ProductContainer >                       
                    
                    <Image src={prod.image} alt='' role='button' onClick={()=>{navigate(`/products/${prod.id}`)}}/>                      
                    <Title>{prod.title}</Title>
                    <InfoContainer>                        
                        <Price> 
                            <small>$</small>
                            <h3><strong>{prod.price.toFixed(2)}</strong> </h3>                                        
                        </Price> 
                        <Rating>
                            <StarRating/>
                        </Rating>  
                                         
                    </InfoContainer>                   
                   <AddToCartButton prod={prod}  />    
              
                </ProductContainer>        
        
   </>
      
    );
}

export default ProductCard;
