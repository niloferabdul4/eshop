import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { Button } from '../../Pages/Products/SingleProductStyles';

const AddToCartButton = ({prod}) => {
    const {dispatch}=useContext(Context)
    const navigate=useNavigate()
     /***** Add Item To Cart Fn ******/

     const addToCart=(prod)=>
     {
         dispatch({
           type:'ADD_TO_CART' ,
           payload:prod})                                           // dispatch an object with type 'ADD ITEM' & payload //
           navigate('/cart')
     }

    return (
        <div>                  
             <Button  id='cart' onClick={()=>addToCart(prod)}  >Add To Cart</Button>           
        </div>
    );
}

export default AddToCartButton;
