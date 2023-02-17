import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { Button } from '../../Pages/Products/SingleProductStyles';

const AddToCartButton = ({prod}) => {
    const {addToCart}=useContext(Context)
    
 
    return (
        <div>                  
             <Button  id='cart' onClick={()=>addToCart(prod)}  >Add To Cart</Button>           
        </div>
    );
}

export default AddToCartButton;
