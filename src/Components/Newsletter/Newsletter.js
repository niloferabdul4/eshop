import React from 'react';
import { useContext,useState,useEffect } from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { NewsletterContainer,Title,Description,Wrapper,Input,Button,Label } from './style';

const Newsletter = () => {
    const {user}=useContext(ProdContext)
    const [input,setInput]=useState('')
    const [message,setMessage]=useState('')

    const handleNewsLetter=()=>{
        if(user.email===input){
            setMessage('Email Sent')
           
        }
        else{
            setMessage('Email Is Invalid')
        }
    }

     
    useEffect(() => {
        setTimeout(() => {
          setMessage("")
        }, 1000);
      }, [message])


    return (
        <NewsletterContainer>
            <Title>Newsletter</Title>
            <Description>Get Timely updates from your favourite products...</Description>
            <Wrapper>
                <Input type='text' placeholder='Your Email'  onChange={(event)=>{setInput(event.target.value)}} />
                {message && <Label >{message} </Label> }
                <Button className='btn'  onClick={handleNewsLetter}>Send Email</Button>
            </Wrapper>
        </NewsletterContainer>
    );
}

export default Newsletter;
