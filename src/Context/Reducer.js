
/*********  Store cart items   **********/

 const storeCartItems=(cartItems)=>{
  const cart=cartItems.length>0? cartItems : []      
  localStorage.setItem('cart',JSON.stringify(cart))             
 }

/**********  To calculate the total items and total price  ***********/

export const sumItems=(cartItems)=>{  
  storeCartItems(cartItems);
  return{
    itemCount: cartItems.reduce((total,prod)=>total+prod.quantity,0),                 // initially total(accumulator) will be 0                  
    totalPrice: cartItems.reduce((total,prod)=>total+(prod.price*prod.quantity),0)
  }
}

/**********  Reducer Function   **************/

const Reducer=(state,action)=>{

    switch(action.type)
    {
        case 'ADD_TO_CART':
              /*
                1.Check if item is not in cart already...
                2. If not, push an object to the cartItems array with the current item obj (action.payload) & also add quantity property
                3. return all the states(cartItem,itemCount ,total) along with cartItem array
              */

              if(!state.cartItems.find(item=>item.id===action.payload.id))          // payload is the item mentioned in dispatch fn //
              {                
                  state.cartItems.push({                                             
                    ...action.payload,
                    quantity:1,
                  
                    
                })
              }
          return {
                ...state,
                cartItems:[...state.cartItems] ,                                 // updated cart array
                ...sumItems(state.cartItems)                                    
            }

        case 'REMOVE_FROM_CART':        
           const updatedCartItem= state.cartItems.filter(item=>item.id!==action.payload.id)
          return{
            ...state,
           cartItems:updatedCartItem ,
           ...sumItems(updatedCartItem)
          }
 
        case 'INCREASE_QTY':
          const increaseIndex=state.cartItems.findIndex(item=>item.id===action.payload.id)              // find the index of particular item which first matches //
          state.cartItems[increaseIndex].quantity++                                                     //increase qty of array elem with that index
          return{
            ...state,
             cartItems:[...state.cartItems],
             ...sumItems(state.cartItems)
           
          }

          case 'DECREASE_QTY':
             const decreaseIndex=state.cartItems.findIndex(item=>item.id===action.payload.id)              
              const prod=state.cartItems[decreaseIndex]
              if (prod.quantity>1)
              {
                prod.quantity--;
              }
             return{
              ...state,
              cartItems:[...state.cartItems],
              ...sumItems(state.cartItems)
             }

          case 'CLEAR_ITEMS': 
                 localStorage.removeItem('cart')
            return{

              ...state,
              cartItems:[],
              itemCount:0,
              totalPrice:0
            }
       
        default:
            return state;
    }
}
export default Reducer;