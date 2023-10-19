import React, { useContext} from 'react';
import {IoMdRemove,IoMdAdd} from 'react-icons/io'
import styled from 'styled-components';
import { Context } from '../../Context/Context';
import { mobile } from '../../Responsive';


const Container=styled.div`
        display:flex;
        color:black;
        font-size: 1.1rem;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        margin:20px 0px;
        border:0.2px solid lightgrey;
        width:200px;
        background-color:rgba(0,0,0,0.04);  
        ${mobile({ width:'140px',fontSize:'0.80rem',margin:'0px'})}
        
        
`
const QtyAmount=styled.div`
       display:flex;
       justify-content: space-between;
       padding: 12px;
       margin:0px 10px;
       border:0.2px solid lightgrey; 
       background-color:white ;

`

const QuantityContainer = ({cartProd}) => { 

    const {dispatch}=useContext(Context)

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
    return (
        <>
           <Container >
            <IoMdAdd onClick={()=>{increaseQty(cartProd)}}  size={24} />
                <QtyAmount >{cartProd.quantity}</QtyAmount>
            <IoMdRemove  onClick={()=>{decreaseQty(cartProd)}}  size={24}/>     
           </Container>    
        </>

    );
}

export default QuantityContainer;
