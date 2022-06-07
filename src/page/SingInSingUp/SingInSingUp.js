import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";
import logoUP from "../../assets/png/illustration.png";
import logowhite from "../../assets/png/logo-white.png";

import "./SingInSingUp.scss";

export default function SingInSingUp(props) {
  const { setRefreshCheckLogin } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    <>
      <Container className="signin-singup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent
            openModal={openModal}
            setShowModal={setShowModal}
            setRefreshCheckLogin={setRefreshCheckLogin}
          />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
  );
}
function LeftComponent() {
  return (
    <Col className="signin-singup__left" xs={6}>
      <img src={logoUP} alt="SocyUP" />
      {/* <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUser} />
          Enterate de que se esta hablando en Unipamplona.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Únete a la conversación.
        </h2>
      </div> */}
    </Col>
  );
}

function RightComponent(props) {
  const { openModal, setShowModal } = props;
  return (
    <Col className="signin-singup__right" xs={6}>
      <div>
        <img src={logowhite} alt="SocyUP" />
        <h2>Mira lo que esta pasando en la Unipamplona en este momento</h2>
        <h3>¡Únete a SocyUP!</h3>
        <Button
          variant="primary"
          onClick={() => openModal(<SignUpForm setShowModal={setShowModal} />)}
        >
          Regístrate
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => openModal(<SignInForm />)}
          //    setRefreshCheckLogin={setRefreshCheckLogin
        >
          Iniciar sesión
        </Button>
      </div>
    </Col>
  );
}
