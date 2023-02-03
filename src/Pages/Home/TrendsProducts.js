import React,{useState,useEffect,useContext} from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { DealsWrapper,Title,ArrowBtn } from './style';
import TrendsItem from './TrendsItem';
//import NavigateNextIcon from '@mui/icons-material/NavigateNextIcon';
import settings from './Settings';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendsProducts = () => {

    const {products}=useContext(ProdContext)
    const [trendsProducts,setTrendsProducts]=useState([])    
    //const randomNum=Math.floor(Math.random()*((products.length)))
    //console.log(randomNum)
   
   useEffect(()=>{
        if(products===[]){
            <p>Loading...</p>
        }
        else{
           
            setTrendsProducts(products)  
          
        }
                   
       },[])

    return (
        <>
         <DealsWrapper>
          <Title>Top Deals</Title> 
         
            <Slider {...settings} >                                  
                    {trendsProducts.map(item=>{return <TrendsItem   key={item.id}
                                                                    id={item.id}
                                                                    path={item.path}
                                                                    title={item.title}
                                                                    price={item.price}
                                                                    category={item.category}
                                                                    image={item.image}                   
                    />})}   
             </Slider>
             <ArrowBtn>
              {/*<NavigateNextIcon />*/}
             </ArrowBtn>
            
            </DealsWrapper>
        </>
    );
}

export default TrendsProducts;
