import React from 'react';
import { useNavigate} from 'react-router-dom';
import {  InfoContainer,
  CheckoutProductContainer,
  ProductTitle,
  AmountDetails,
  Image } from './style';


  

const CheckoutProduct = ({checkoutProd}) => {      
        
        const navigate=useNavigate()
        return (
        <>   
        <CheckoutProductContainer >           
           <Image src={checkoutProd.image} alt='' role='button' onClick={()=>{navigate(`/products/${checkoutProd.id}`)}} />                           
             <InfoContainer>                  
                    <ProductTitle>{checkoutProd.title}</ProductTitle>                                      
                    <AmountDetails>${checkoutProd.price}</AmountDetails>                                                                              
             </InfoContainer>                                  
        </CheckoutProductContainer>
        </>
    );
}

export default CheckoutProduct;
