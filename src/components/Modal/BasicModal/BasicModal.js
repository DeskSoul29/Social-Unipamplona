import React from "react";
import {Modal} from "react-bootstrap";
import logowhite from "../../../assets/png/logo-white.png";

import "./BasicModal.scss";

export default function BasicModal(props) {
    const { show,setShow, children } = props;
    return (
        <Modal
            className="basic-modal" 
            show={show}
            onHide={()=>setShow(false)}
            centered
            size="lg"
        >
            <Modal.Header>
                <Modal.Title>
                    <img src={logowhite} alt="socialunipamplona"/>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
}