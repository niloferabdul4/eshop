import React,{useContext} from 'react';
import QuantityContainer from '../../Components/QuantityContainer/QuantityContainer';
import { Context } from '../../Context/Context';
import { useNavigate} from 'react-router-dom';
import { ProdContext } from '../../Context/ProdContext';

import { CartProductContainer,     
        InfoContainer,
        ProductTitle,
        DeleteButton,
        BtnContainer,
        Image,Info,
        Price,Size
         } from './style';


const CartProduct = ({cartProd}) => {     
        const {size}=useContext(ProdContext)
        const {dispatch}=useContext(Context)      
        const navigate=useNavigate()
    
        
     const removeFromCart=(cartProd)=>{
      dispatch({
        type:'REMOVE_FROM_CART',
        payload:cartProd})
  }


        return (
        <>
   
        <CartProductContainer >           
           <Image src={cartProd.image} alt='' role='button' onClick={()=>{navigate(`/products/${cartProd.id}`)}} />                           
             <InfoContainer> 
                <Info>
                  
                    <ProductTitle>{cartProd.title}</ProductTitle>                    
                 
                  <Price><small>$</small>{cartProd.price}</Price> 
               </Info> 
               <Size>Size: <strong>{size}</strong></Size>                                
               <BtnContainer>
                        <QuantityContainer cartProd={cartProd} />   
                        <DeleteButton onClick={()=>{removeFromCart(cartProd)}}>Delete</DeleteButton>           
               </BtnContainer>     
             </InfoContainer>                              
        </CartProductContainer>
        </>
    );
}

export default CartProduct;
