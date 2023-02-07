import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { Button } from '../../Pages/Products/SingleProductStyles';

const AddToCartButton = ({prod}) => {
    const {addToCart}=useContext(AppContext)
 
    return (
        <div>                  
             <Button  id='cart' onClick={()=>addToCart(prod)}  >Add To Cart</Button>           
        </div>
    );
}

export default AddToCartButton;
