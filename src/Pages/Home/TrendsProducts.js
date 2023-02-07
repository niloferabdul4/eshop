import React,{useState,useEffect,useContext} from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { DealsWrapper,Title } from './style';
import TrendsItem from './TrendsItem';
//import NavigateNextIcon from '@mui/icons-material/NavigateNextIcon';
import settings from './Settings';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendsProducts = () => {

    const {products}=useContext(ProdContext)
    const [trendsProducts,setTrendsProducts]=useState([])    
    const OfferPercent=['Upto 50%','Upto 25%','Upto 75%','Upto 10%','Upto 15%','Upto 40%','Upto 80%','Upto 60%','Upto 70%']
 
   useEffect(()=>{
        if(products===[]){
            <p>Loading...</p>
        }
        else{
           
            setTrendsProducts(products)  
          
        }
                   
       },[products])

    return (
        <>
        
          <Title>Top Deals</Title> 
          <DealsWrapper>
            <Slider {...settings} >                                  
                    {trendsProducts.map(item=>{return <TrendsItem   key={item.id}
                                                                    id={item.id}
                                                                    path={item.path}
                                                                    title={item.title}
                                                                    price={item.price}
                                                                    category={item.category}
                                                                    image={item.image} 
                                                                    OfferPercent={OfferPercent}  
                                                                         
                    />})}    
             </Slider>
                  
            </DealsWrapper>
        </>
    );
}

export default TrendsProducts;
