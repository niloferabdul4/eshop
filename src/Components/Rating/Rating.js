import React from 'react';
import {AiFillStar}from 'react-icons/ai'
import { useState } from 'react';
import styled from 'styled-components';


const StarRating = () => {
    const MinRating=1
    const MaxRating=5
    const randomNo=Math.floor(Math.random()*(MaxRating+MinRating))
    const [rating]=useState(randomNo)
    return (
        <div>
            {Array(rating)
                    .fill()
                    .map((_,i)=>(
                                       <AiFillStar key={rating.id} color='gold' size={22} />
                               
                                ))} 
                                            
        </div>
    );
}

export default StarRating;
