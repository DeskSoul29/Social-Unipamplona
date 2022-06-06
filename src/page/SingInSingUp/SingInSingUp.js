import React, { useState } from "react";
import {Container,Row,Col,Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faSearch,
    faUser,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import logoblue from "../../assets/png/logo.png";
import logowhite from "../../assets/png/logo-white.png";

import "./SingInSingUp.scss";

export default function SingInSingUp(){
    const [showModal, setShowModal] = useState(false);
    const [contentModal,setContentModal]= useState(null);
    const openModal = content => {
        setShowModal(true);
        setContentModal(content); 
        
    };
    return(
        <>
       <Container className="signin-singup" fluid>
           <Row>
               <LeftComponent/>
               <RightComponent openModal={openModal} setShowModal={setShowModal}/>
           </Row>
       </Container>
        <BasicModal show={showModal} setShow={setShowModal}>
            {contentModal}

        </BasicModal>
      
       </>
    );
}
function LeftComponent(){
    return(
        <Col className="signin-singup__left" xs={6}>
            
            <img src={logoblue} alt="socialunipamplona"/>
            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearch} />
                    sigue lo que te interesa.
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUser} />
                    Enterate de que esta hablando en unipamplona.</h2>
                <h2>
                    <FontAwesomeIcon icon={faComment} />
                    Únete a la conversación.
                </h2> 
            </div>
        </Col>
    );
}

function RightComponent(props) {
    const {openModal, setShowModal}=props;
    return(
        <Col className="signin-singup__right" xs={6}>
            <div>
            <img src={logowhite} alt="socialunipamplona"/>
                <h2>Mira los que esta pasando en el mundo en este momento</h2>
                <h3>únete a socialunipamplona</h3>
                <Button 
                    variant="primary" 
                    onClick={() => openModal(<SignUpForm setShowModal={setShowModal}/>)}>  
                Regístrate  
                </Button>
                <Button 
                    variant="outline-primary" 
                    onClick={()=> openModal(<h2>Formulario de Login</h2>)}
                    >
                      Iniciar sesión 
                </Button>

            </div>
        </Col>
    );
}