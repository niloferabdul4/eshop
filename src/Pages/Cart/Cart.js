
import React,{useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import {Container,LeftWrapper,RightWrapper,Button,CButton,Title,OrderSummary,AmountDetails,ClearButton,Message} from './style'
import { AppContext } from '../../Context/AppContext';
import CartProduct from './CartProduct';
import { ProdContext } from '../../Context/ProdContext';


const Cart = () => {  
      const {cartItems,clearItems,itemCount,totalPrice}=useContext(AppContext)  
      const {user} =useContext(ProdContext)
           
      const navigate=useNavigate()    
      return (
        <>
            <Container>  
                    <LeftWrapper>                         
                         <CButton id='continue' onClick={() => navigate(-1)}>Continue Shopping</CButton>
                          <Title>Shopping Cart</Title>
                            
                     {cartItems.length>0? 
                   ( cartItems.map(cartProd=>{return <CartProduct  key={cartProd.id} cartProd={cartProd}
                                                         
                                         />  }) )                                       
                
                   :

                   (<Message>Your Cart Is Empty</Message>)
                   }
                  {cartItems.length>1 && <ClearButton onClick={()=>clearItems(cartItems)}>Clear All</ClearButton> }       
                    </LeftWrapper>
                  {cartItems.length>0 &&
                    <RightWrapper>                           
                           
                              <OrderSummary>                    

                                    <AmountDetails>                        
                                      
                                        <h3> {`Subtotal (${itemCount} items) : $${totalPrice.toFixed(2)}`} </h3> 
                                                                                                  
                                    </AmountDetails> 
                                    {user===null?  
                                    (<Button onClick={()=>navigate('/login')}>Proceed To Buy </Button>)                                                                  
                                    :
                                    (<Button onClick={()=>navigate('/payment')}>Proceed To Buy </Button>)
                                    
                                    
                                    }
                            </OrderSummary>
                    </RightWrapper>
                 }  
              
            </Container>
        </>
    );
}

export default Cart;
