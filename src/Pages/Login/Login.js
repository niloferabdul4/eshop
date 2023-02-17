import React, { useState ,useRef,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container,Wrapper,Title,Form,InputWrapper,Label,Input,SignIn,Span,ErrorLabel } from './loginStyles';
import { auth } from '../../Context/Utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const[formData,setFormData]=useState({email:'',password:''})
    const[formerrors,setFormErrors]=useState({})
    const inputRef=useRef(null)
    const navigate=useNavigate()
                 
    useEffect(()=>{
                    inputRef.current.focus();
                },[]
            )
                
   /*
    useEffect(()=>{

                if ( Object.keys(formerrors).length===0 && isSubmit)
                {
                  setSuccess(true)
                }
        
        },[formerrors])

*/
  
   const handleChange=(event)=>
   {
    const {name,value}=event.target;
    setFormData(prevData=>({...prevData,[name]:value}))
   }

   const handleSubmit=(event)=>
   { 
    event.preventDefault();
    //setFormErrors(validate(formData));
    signInWithEmailAndPassword(auth,formData.email,formData.password)
        .then((auth)=>{  
                        if (auth)
                        {
                        navigate(-1)
                        }
                        
                        })
      .catch((error)=>alert(error.message))
      
   }
    
/*
   const validate=(values)=>{

        const errors={};
        const regX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!values.email)     
        {
            errors.email='Email is required'
        }
           
        else if(!regX.test(values.email))
        {
            errors.email='Email is invalid'
        
        }     
       
        if(!values.password)
        {
            errors.password='Password is required'
        }
        

        else if (values.password.length<6)
        {
            errors.password='Password must be atleast 6 characters'

        }
        
        return errors;
     
    }
*/
   

    return (
        <Container>           
         
                        <Wrapper>
                        <Title>Sign In</Title>
                        <Form onSubmit={handleSubmit}>
                                    <InputWrapper>
                                            <Label htmlFor='email'>Email</Label>
                                            <Input type='text' 
                                            placeholder='Email' 
                                            value={formData.email} 
                                            name='email'
                                            id='email' 
                                            ref={inputRef} 
                                            onChange={handleChange}
                                            required
                                            />   
                                         <ErrorLabel>{formerrors.email}</ErrorLabel>    
                                    </InputWrapper>
                                    <InputWrapper>
                                            <Label html='password'>Password</Label>
                                            <Input type='text' 
                                            placeholder='Password'  
                                            value={formData.password} 
                                            name='password'
                                            id='password'  
                                            ref={inputRef}
                                            onChange={handleChange}
                                            required/>
                                            <ErrorLabel>{formerrors.password}</ErrorLabel>
                                    </InputWrapper>                            

                                    <SignIn>Sign In</SignIn>
                    
                                    <Span>
                                            <Label>New User?</Label>
                                            <NavLink to='/register'  style={{marginLeft:'10px', fontSize: '18px', color:'blue' , textDecoration:'none'}}>Create An Account</NavLink>
                                    </Span>
                      </Form>     
                                
                      </Wrapper>   
                              
        </Container>
    );
}

export default Login;

