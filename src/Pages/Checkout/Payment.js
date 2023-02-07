import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { ProdContext } from '../../Context/ProdContext';
import {PaymentContainer,PaymentItem,PaymentAddress,PaymentSection,PaymentTitle,PaymentDetails,OrderContainer,Button} from './style'
import CheckoutProd from './CheckoutProd'
import Modal from '../../Components/OrderModal/Modal';


const Payment = () => {
 const {cartItems,totalPrice}=useContext(AppContext)
 const [success,setSuccess]=useState(false)
 const {setModal,user}=useContext(ProdContext)     



 const toggleModal=()=>{     
   setModal(true) 
}

const handleSubmit=()=>{
   setSuccess(prevState=>!prevState)
   setModal(true)

 
}

    return (
        <>       
            <PaymentContainer> 
                <h2 style={{margin:'30px'}}> Checkout ({cartItems?.length} items)</h2>
                
                <PaymentSection>
                        <PaymentTitle>
                            Delivery Address
                        </PaymentTitle>
                    
                        <PaymentAddress>
                            <p>{user?.email}</p>
                            <p>First line</p>
                            <p>Second</p>
                        </PaymentAddress>
                </PaymentSection>
            
                 <PaymentSection>
                         <PaymentTitle>
                            Items For Checkout
                        </PaymentTitle>
                         <PaymentItem>
                        {
                            cartItems.map(item=>(
                                <CheckoutProd  checkoutProd={item}
                                />
                            ))
                        }
                        </PaymentItem>
                    </PaymentSection>
                    <PaymentSection>
                        <PaymentTitle>
                                Payment Method
                        </PaymentTitle>
                     </PaymentSection>
                    <OrderContainer>  
                                     
                        <PaymentDetails> 
                             <>
                             <h2> {`Order Total : $${totalPrice.toFixed(2)}`} </h2> 

                             {/*<p>{`Your Order has Confirmed...Thank you for your payment. 
                                An automated payment receipt will be sent to your email`}</p>     */}                                            
                             {!success &&<Button onClick={handleSubmit}>Pay</Button>}
                             </>                   
                             
                        </PaymentDetails>                                                                    
                        
                    </OrderContainer>
           

                 {success &&
              <Modal toggleModal={toggleModal}/>  
}                
            </PaymentContainer>


        </>
    );
}

export default Payment;
