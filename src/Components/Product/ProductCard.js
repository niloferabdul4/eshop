import React from 'react';
import StarRating from '../Rating/Rating';
import {ProductContainer,Image,Title,InfoContainer,Price,Rating,BtnContainer}from './ProductCardStyle';
import AddToCartButton from '../AddToCart Button/AddToCartButton';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({prod}) => { 
   const navigate=useNavigate()

    return (  

   <>

                <ProductContainer >                       
                    
                    <Image src={prod.image} alt='' role='button' onClick={()=>{navigate(`/products/${prod.id}`)}}/>                      
                    
                    <InfoContainer>   
                        <Title>{prod.title}</Title>                  
                        <Price> 
                            <small>$</small>
                            <h3><strong>{prod.price.toFixed(2)}</strong> </h3>                                        
                        </Price> 
                        <Rating>
                            <StarRating/>
                        </Rating >  
                                         
                    </InfoContainer>  
                    <BtnContainer>
                      <AddToCartButton prod={prod}  />   
                     </BtnContainer>     
                    
                </ProductContainer>        

   
   </>
      
    );
}

export default ProductCard;