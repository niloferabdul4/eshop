import React,{ createContext,useReducer,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reducer,{sumItems} from './Reducer';


export const AppContext=createContext();

  const localCartData=localStorage.getItem('cart')?
                      JSON.parse(localStorage.getItem('cart')):[]
  


  const AppContextProvider=({children})=>{

 
 
  const initialState={                                           /// state object that will be passed to reducer fn //////
                      cartItems:localCartData,
                      ...sumItems(localCartData),
                      user:null,
                      modal:false
                     }                        

    const [state,dispatch]=useReducer(Reducer,initialState)        // useReducer syntax ///
    const navigate=useNavigate()

         
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
        <AppContext.Provider value={{  
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
        </AppContext.Provider>
        </>
    )
}

export default AppContextProvider;