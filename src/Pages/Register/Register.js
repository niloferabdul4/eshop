import React from 'react';
import { useState,useEffect} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import { RegisterContainer,Wrapper,Title,Form,InputWrapper,Label,Input,ErrorLabel,Button,SignIn} from './registerstyles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Context/Utils/firebase';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  /********   useStates  **********/      

   const [formData,setFormData]=useState({FirstName:'', LastName:'', Email:'' ,Password:'',ConfirmPassword:''})
   const [formerrors,setFormErrors]=useState({})                                      // object for errors //
   const [success,setSuccess]=useState(false)
   const[isSubmit,setIsSubmit]=useState(false)
   const navigate=useNavigate()


   /****  UseEffect  ***********/


   useEffect(()=>{

        if ( Object.keys(formerrors).length===0 && isSubmit)          // if no errors & ifsubmit //
       {
        setSuccess(true) 

       }                            

},[formerrors])

   const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormData(prevData=>({...prevData,[name]: value}))
   }

   const handleSubmit=(event)=>{

        event.preventDefault(); 
        setFormErrors(validate(formData))                      // validate the formData (vallidate fn will run) and set to setFormErrors //
        setIsSubmit(true)        
        createUserWithEmailAndPassword(auth,formData.Email,formData.Password)
            .then((auth)=>{
                            if(auth)          // successfully created user with email and pwd
                            {
                                navigate('/')
                            }
                        })      
            .catch((error)=>console.log(error.message))   // error
 
   }

   const validate=(data)=>{
       
        const errorObj={}                                     // empty obj for placing the errors //
        const regX=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        
        if(!data.FirstName)                                   // if the firstname is empty ///
        {
                errorObj.FirstName='FirstName is required'
        }
       
        if(!data.LastName)
        {
                errorObj.LastName='LastName is required'
        }
        if(!data.Email)
        {
                errorObj.Email='Email is required'
        }
        else if (!regX.test(data.Email))
        {
                errorObj.Email='Email is Invalid'
        }
        if(!data.Password)
        {
                errorObj.Password='Password is required'
        }
        else if(data.Password.length<6)
        {
                errorObj.Password='Password must be atleast 6 characters'
        }             

        if(!data.ConfirmPassword)
        {
                errorObj.ConfirmPassword='Please confirm your password'
        }
        else if(data.ConfirmPassword!==data.Password)
        {
                errorObj.ConfirmPassword="Password didn't match"
        }
        return errorObj;                                                     // return the error obj  ///
}

   
    return (

        <RegisterContainer>
            {
                 success? 
                 (    
                        navigate('/')            
                  )

                  :
                 (
            
            <Wrapper>
               <Title>Create Acccount</Title>
               <Form onSubmit={handleSubmit}>
                        <InputWrapper>
                                <Label htmlFor='fname'>First Name</Label>
                                <Input type='text' 
                                        id='fname' 
                                        placeholder='First name' 
                                        value={formData.FirstName}
                                        name='FirstName'
                                        onChange={handleChange}
                                />                             
                                    
                                 <ErrorLabel>{formerrors.FirstName}</ErrorLabel>
                               
                        </InputWrapper>
                        <InputWrapper>
                                <Label htmlFor='lname'>Last Name</Label>
                                <Input type='text'
                                        id='lname'
                                        placeholder='Last name'
                                        value={formData.LastName}
                                        name='LastName'
                                        onChange={handleChange}
                                 />                                                              
                                <ErrorLabel>{formerrors.LastName}</ErrorLabel>
                                
                        </InputWrapper>
                        <InputWrapper>
                                <Label htmlFor='email'>Email</Label>
                                <Input type='text'
                                        id='email'
                                        placeholder='Email'
                                        value={formData.Email}
                                        name='Email'
                                        onChange={handleChange}
                                 />                                                                   
                                <ErrorLabel>{formerrors.Email}</ErrorLabel>
                                 
                        </InputWrapper>
                        <InputWrapper>
                                <Label htmlFor='pwd'>Password</Label>
                                <Input type='password' 
                                        id='pwd'
                                        placeholder='Password'
                                        value={formData.Password}
                                        name='Password'
                                        onChange={handleChange}
                                />                                                                  
                                <ErrorLabel>{formerrors.Password}</ErrorLabel>
                               
                        </InputWrapper>
                        <InputWrapper>
                                <Label htmlFor='confirm'>Confirm Password</Label>
                                <Input type='text' 
                                        id='confirm'
                                        value={formData.ConfirmPassword}
                                        name='ConfirmPassword'  
                                        onChange={handleChange}
                                />
                                 <ErrorLabel>{formerrors.ConfirmPassword}</ErrorLabel>
                        </InputWrapper>

                        <Button type='submit'>Continue</Button>
                                             
                        <SignIn>Already have an account?  <NavLink to='/login'> Sign In </NavLink> </SignIn>
               </Form>

            </Wrapper>
                 )

                 } 
        </RegisterContainer>
    );

}
export default Register;

