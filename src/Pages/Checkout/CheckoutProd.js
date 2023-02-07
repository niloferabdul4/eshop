import React from 'react';
import QuantityContainer from '../../Components/QuantityContainer/QuantityContainer';
import { useContext} from 'react';
import { AppContext } from '../../Context/AppContext';
import { useNavigate} from 'react-router-dom';

import {  InfoContainer,
  CartProductContainer,
  ProductTitle,
  DeleteButton,
  BtnContainer,
  AmountDetails,
  Image } from '../Cart/style';



const CheckoutProduct = ({checkoutProd}) => {      
        
        const navigate=useNavigate()
        return (
        <>   
        <CartProductContainer >           
           <Image src={checkoutProd.image} alt='' role='button' onClick={()=>{navigate(`/products/${checkoutProd.id}`)}} />                           
             <InfoContainer>                  
                    <ProductTitle>{checkoutProd.title}</ProductTitle>  
                    <hr></hr>                   
                    <AmountDetails>${checkoutProd.price}</AmountDetails>                                                                              
             </InfoContainer>                         
        </CartProductContainer>
        </>
    );
}

export default CheckoutProduct;
