import React from 'react';
import {    ProductContainer,
            ImageContainer,
            Image,InfoContainer,
            Title,
            Price,
            Rating,
            Description,
            Button,
            Span } from './SingleProductStyles';
import FilterContainer from '../../Components/FilterContainer/FilterContainer';
import StarRating from '../../Components/Rating/Rating';
import {useState,useEffect,useContext}from 'react'
import AddToCartButton from '../../Components/AddToCart Button/AddToCartButton';
import {useNavigate, useParams } from 'react-router-dom';
import { ProdContext } from '../../Context/ProdContext';


const SingleProductdetails = () => {

    const {products}=useContext(ProdContext)  

    const [singleProduct,setSingleProduct]=useState({})
    const {id}=useParams();
    const navigate=useNavigate()
   
    useEffect(()=>{
            const singleProduct=products.find(item=>Number(item.id)===Number(id))
            setSingleProduct(singleProduct)
            // if prod does not exist redirect to products page//
            if(!singleProduct)
            {
                navigate('/products')
            }
       
      },[id]);
    
      
    return (

      <ProductContainer>                 
                <ImageContainer>
                    <Image src={singleProduct.image} alt='' />                    
                </ImageContainer>

                 <InfoContainer>
                        <Title>{singleProduct.title}</Title>
                        <hr style={{marginBottom:'10px', marginTop:'0px'}}></hr>
                        <Price>
                            <small>$</small>
                            <strong>{singleProduct.price}</strong>
                        </Price>
                        <Rating>
                               <StarRating />                                                
                        </Rating>                 

                        <Description>{singleProduct.description}</Description>

                    <FilterContainer /> 
                    <Span style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',width:'100%'}}>                          
                          
                            <AddToCartButton prod={singleProduct} />    
                            <Button onClick={()=>{navigate('/login')}}>Buy Now</Button>
                    </Span>
                                          
                 </InfoContainer>            
           </ProductContainer>

    );
}

export default SingleProductdetails;
