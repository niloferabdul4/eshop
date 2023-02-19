/*

import React from 'react';
import { IoMdClose} from 'react-icons/io'
import { useContext } from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { ModalContainer,Overlay,ModalInfo,CloseModalBtn,ModalTitle,ModalContent } from './style';

const Modal = () => {   
    const {modal,setModal} =useContext(ProdContext)
 

    const toggleModal=()=>{
        setModal(prevmodal=>!prevmodal)
        console.log('hello')
     
    }
    return (
        <>       
        <ModalContainer>
            <Overlay ></Overlay>
              {modal &&
                <ModalContent>
                    <ModalTitle>Confiramation</ModalTitle>
                    <ModalInfo>Your Order has Confirmed</ModalInfo>
                    <CloseModalBtn>
                ugug
                <IoMdClose color={'black'} onClick={toggleModal}/>
            </CloseModalBtn>        
                </ModalContent>               
}
              
        </ModalContainer>        
        </>
    );
}

export default Modal;
*/

import React from 'react';
import { IoMdClose} from 'react-icons/io'
import { useContext } from 'react';
import { ProdContext } from '../../Context/ProdContext';
import { Overlay,ModalInfo,CloseModalBtn,ModalContent,Button} from './style';
import {useNavigate } from 'react-router-dom';

const Modal = () => {   
    const {modal,setModal,user} =useContext(ProdContext)
    const navigate=useNavigate()
    const closeModal=()=>{
        setModal(false)
    }
    return (
        <>    
            {modal&&
            <>
              <Overlay>
           
                <ModalContent>                  
                   <ModalInfo>{`Hello ${user.email.split('@')[0]}.....
                                Your Order has Confirmed... 
                                An automated payment receipt will be sent to your email

                                 `}

                    </ModalInfo>
                    <CloseModalBtn onClick={closeModal}>
                    <IoMdClose color={'black'} size={20} />
                    </CloseModalBtn>
                    <Button onClick={()=>{navigate('/')}}>Back To Home</Button>
                </ModalContent>   
                </Overlay>
                </>            
            }
              
     
        </>
    );
}

export default Modal;
