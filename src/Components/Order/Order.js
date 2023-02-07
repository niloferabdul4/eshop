import React from 'react';
import AddToCartButton from '../../Components/AddToCart Button/AddToCartButton';
import styled from 'styled-components';

 const OrderContainer=styled.div`

        flex:0.25;
        display: flex;
        flex-direction: column;
        padding:20px;
        gap:30px;
        border:1px solid grey;
        margin: 10px;
        max-height: 600px;
        border-radius: 8px;
`
 const Price=styled.div`
        display:flex;
        flex-direction: row;        
        font-size: 26px;
        font-weight:600;

`

const Description=styled.div`
        
        line-height: 30px;
        font-size:18px;
        text-align: justify;
        padding:10px 0px;              

`

export const Button=styled.div`

        height:40px;
        width:100%;
        border-radius: 6px;
        background-color: orange;
        font-size: 1.1rem;
        border:none;
        cursor: pointer;
        align-items: center;
        font-weight: 600;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        padding: 10px;       

`

const Order = () => {
    return (
        <div>
                <OrderContainer>

                    <Price>                        
                        <pre style={{fontSize:'24px'}}>$</pre>
                        <strong>{singleProduct.price}</strong>
                
                    </Price>

                    <Description>{singleProduct.description}</Description>

                    <AddToCartButton/>
                    <Button>Buy Now</Button>

                </OrderContainer>
         </div>
    );
}

export default Order;
