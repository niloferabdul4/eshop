import React,{ createContext,useReducer} from 'react';
import { useNavigate } from 'react-router-dom';
import Reducer,{sumItems} from './Reducer';


export const Context=createContext();

  const localCartData=localStorage.getItem('cart')?
                      JSON.parse(localStorage.getItem('cart')):[]

  const ContextProvider=({children})=>{                  
        const navigate=useNavigate()
        const [state,dispatch]=useReducer(Reducer,{                                           /// state object that will be passed to reducer fn //////
                                                  cartItems:localCartData,
                                                  ...sumItems(localCartData),
                                                  user:null,
                                                  modal:false
                                                   }       
                                          )        
       
            
        /***** Add Item To Cart Fn ******/

        const addToCart=(prod)=>
        {
            dispatch({
              type:'ADD_TO_CART' ,
              payload:prod})                                           // dispatch an object with type 'ADD ITEM' & payload //
              navigate('/cart')
        }

        const removeFromCart=(cartProd)=>{
            dispatch({
              type:'REMOVE_FROM_CART',
              payload:cartProd})
        }

        const increaseQty=(cartProd)=>{
          dispatch({
                type: 'INCREASE_QTY',
                payload:cartProd
          })
        }

        const decreaseQty=(cartProd)=>{
          dispatch({
                type: 'DECREASE_QTY',
                payload:cartProd
          })
        }
    const clearItems=(cartItems)=>{
          dispatch({
            type:'CLEAR_ITEMS',
            payload:cartItems
          })
}


    return(
        <>
        <Context.Provider value={{  
                                        cartItems:state.cartItems,
                                        totalPrice:state.totalPrice,
                                        itemCount:state.itemCount,
                                        addToCart,
                                        removeFromCart,
                                        increaseQty,
                                        decreaseQty,
                                        clearItems,
                                       
                                        
                                        }} >
            {children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider;


