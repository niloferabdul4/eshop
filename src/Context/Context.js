import React,{ createContext,useContext,useEffect,useReducer} from 'react';
import Reducer,{sumItems} from './Reducer';
import FilterReducer from './FilterReducer';
import { ProdContext } from './ProdContext';



export const Context=createContext();
  
  const ContextProvider=({children})=>{   
    
        const {products}=useContext(ProdContext)
   
  
        let localCartData=localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[]   

        const [state,dispatch]=useReducer(Reducer,{                                           /// state object that will be passed to reducer fn //////
                                                  cartItems:localCartData,
                                                  ...sumItems(localCartData),
                                                  user:null,
                                                  modal:false
                                                   }       
                                          )        
                
        const [filterState,filterDispatch]=useReducer(FilterReducer, {                                                                      
                                                                      sort:'asc',
                                                                      searchText:'',
                                                                      category:'all',
                                                                      price:'',  
                                                                      maxPrice:0                                                                 

                                                            })

/*****  Setting the products to all_products when loading  *************/

        useEffect(()=>{dispatch({type:'LOAD_FILTER_PRODUCTS',payload:products})},[products])  

        return(
            <>
            <Context.Provider value={{state,dispatch,filterState,filterDispatch}} >
                {children}
            </Context.Provider>
            </>
        )
}

export default ContextProvider;


