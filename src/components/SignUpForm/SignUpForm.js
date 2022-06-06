import React,{useState} from "react";
import { Row,Col,Form,Button,Spinner} from "react-bootstrap";
import {values,size } from "lodash";
//import {toast} from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';
import {isEmailValid} from "../../utils/validations";
import { signUpApi } from "../../api/auth";

import "./SignUpForm.scss";

export default function SignUpForm(props) {
    const {setShowModal }=props;
    const [formData, setFormData] = useState(initialFormValue());
    const [signUpLoading, setSignUpLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        //console.log(formData);

        let validCount = 0;
        values(formData).some(value => 
            { value && validCount++;
        return null; 
    });
   // console.log(validCount);
    //console.log(size(formData));

    if(validCount !== size(formData)){
        toast.warning("campos incompletos");
    } else {
        if (!isEmailValid(formData.email)){
            toast.warning("email invalido")

        } else 
        if (FormData.password !== FormData.repeatPassword){
            toast.warning("las contraseñas no son iguales");

        } else if (size(formData.password) < 6){
            toast.warning("contraseñas debe tener 6 caracteres")

        } else {
            setSignUpLoading(true);
            signUpApi(formData);

            //toast.success("campos compleos");
        }
    
    }
       
    };
    //formularios construidos solo con inputs

    //Función reutilizable
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };



    return (
    <div className="sign-up-form">
        <h2>Crea tu cuenta</h2>
        <Form onSubmit={onSubmit} onChange={onChange}>
            <Form.Group>
                <Row>
                    <Col>
                        <Form.Control 
                        type="text" 
                        placeholder="Nombre" 
                        name="nombre"
                        defaultValue={formData.nombre} 
                        />
                    </Col>
                    <Col>
                        <Form.Control 
                        type="text" 
                        placeholder="Apellidos" 
                        name="apellidos"
                        defaultValue={formData.apellidos} 
                         />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Form.Control type="email" placeholder="Correo electronico" name="email" defaultValue={formData.email}  />
            </Form.Group>
            <Form.Group>
                <Row>
                    <Col>
                        <Form.Control type="password" placeholder="Contraseña"  name="password" defaultValue={formData.password} />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Repetir contraseña" name="repeatPassword" defaultValue={formData.repeatPassword} />
                    </Col>
                </Row>
            </Form.Group>


            <Button variant="primary" type="submit">
                {!signUpLoading ? "Registrate" : <Spinner animation = "border"/>}
                
            </Button>
        </Form>
    </div>
    );
}

function initialFormValue(){
    return{
        nombre:"",
        apellidos:"",
        email:"",
        password:"",
        repeatPassword:""
    };
}