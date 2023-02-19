import React,{useContext} from 'react';
import {AiOutlineShoppingCart}from 'react-icons/ai'
import { ShopCart,CartCount,Links} from './style';
import {Context} from '../../Context/Context';

const ShoppingCart = () => {

    const {state:{itemCount}}=useContext(Context)
  
    return (
        <ShopCart>
            <Links to ='/cart' >
                 <AiOutlineShoppingCart style={{ marginRight:'0px'}} size={24}  />
                 {itemCount > 0 ? ( <CartCount>{itemCount}</CartCount>) : null}
            </Links> 
        </ShopCart>
    );
}

export default ShoppingCart;
