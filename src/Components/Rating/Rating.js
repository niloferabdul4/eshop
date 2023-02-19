import React from 'react';
import {AiFillStar}from 'react-icons/ai'
import { useState } from 'react';
import styled from 'styled-components';


const StarRating = ({}) => {
    const MinRating=1
    const MaxRating=5
    const randomNo=Math.floor(Math.random()*(MaxRating+MinRating))
    const [rating]=useState(randomNo)
    return (
        <div>
            
    {/*create an Empty array of 5 , map by taking only the index
               check rating for every iteration...
               when clicked , the current index will be changed to rating value ie) setRating(i+1)
               if rating is > current index=>render the filled icon or else empty icon
    */}        

            {Array(rating)
                    .fill()
                    .map((_,i)=>(
                                       <AiFillStar key={i} color='gold' size={22} />
                               
                                ))} 
                                            
        </div>
    );
}

export default StarRating;
