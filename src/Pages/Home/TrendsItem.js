
import React from 'react';
import { TrendsContainer,TrendsInfoContainer,TrendsTitle,TrendsPrice,Button,Image,Offer } from './style';
import { useNavigate } from 'react-router-dom';




const TrendsItem = ({id,image,price,title,OfferPercent}) => {
   const navigate=useNavigate();
   const randomNum=Math.floor(Math.random()*OfferPercent.length)
   
    return (
              <>  
        
          <TrendsContainer role='button' onClick={()=>{navigate(`/products/${id}`)}}> 
            <Offer>{OfferPercent[randomNum]}</Offer>      
             <Image src={image} alt='' />           
             <TrendsTitle>{title}</TrendsTitle>
             <TrendsInfoContainer>
                  <TrendsPrice> 
                             <small>$</small>
                             <h3><strong>{price}</strong> </h3>                                        
                    </TrendsPrice>  
                    <Button className='shopnow_btn'>SHOP NOW</Button>      
                                   
             </TrendsInfoContainer> 
         
         </TrendsContainer>

           
       </>     
        
    );
}

export default TrendsItem;
