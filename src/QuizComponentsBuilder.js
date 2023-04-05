// import ReactDOM from "react-dom/client";
// import ControlledCarousel from "react-bootstrap/Carousel";
// import "react-bootstrap";
// import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Example from "./StaticExample.js";

// eslint-disable-next-line
import Button from "react-bootstrap/Button";
// eslint-disable-next-line
import Modal from "react-bootstrap/Modal";
// eslint-disable-next-line
import { useState } from "react";
// eslint-disable-next-line
import { useModal } from "./useModal";

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

const QuizComponentsBuilder = ({ qid, qname, qlogo, qurl }) => {
  // const useCustomHookToDisplayModal = () => {
  //   const [show, setShow] = useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   return (
  //     <>
  //       <Modal.Dialog>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal title</Modal.Title>
  //         </Modal.Header>

  //         <Modal.Body>
  //           <p>Modal body text goes here.</p>
  //         </Modal.Body>

  //         <Modal.Footer>
  //           <Button variant="secondary">Close</Button>
  //           <Button variant="primary">Save changes</Button>
  //         </Modal.Footer>
  //       </Modal.Dialog>
  //     </>
  //   );
  // };

  const showQuiz = (e) => {
    e.preventDefault();
    console.log(`${qname} was clicked.`);
    <useModal />;
  };

  return (
    <div className="c_quiz_topic" onClick={showQuiz}>
      <img src={qlogo} alt={qname} />
      <h4>{qname}</h4>
    </div>
  );
};

export default QuizComponentsBuilder;
