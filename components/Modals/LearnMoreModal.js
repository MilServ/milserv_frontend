import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

//customStyles is props for Modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    overflowY: "scroll",
    maxHeight: "calc(100vh - 5px)",
    color: "white",
    backgroundColor: "rgba(0,0,0,.90)",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
  },
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    width: "155px",
    borderRadius: 20,
    fontSize: "0.90rem",
  },
}));

export default function LearMoreModal(props) {
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button className="btn btn-outline-light btn-md" onClick={openModal}>
        Learn More
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container>
          <Row style={{ marginTop: 190 }}>
            <Col xs={12} s={12} md={12} lg={12}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col xs={12} s={12} md={12} lg={12}>
              <p>
                MilServ ACD Corp. is a veteran owned, veteran-employing, and
                veteran-supporting supply chain and logistics company
                specializing in delivering craft alcohol products to retailers,
                distributors, and where permitted, to consumers.
              </p>
              <p>
                The company relies on technology for managing orders, logistics
                and deliveries to provide customers with a lower cost
                alternative to traditional approaches to distribution.
              </p>
              <p>
                Milserv’s dual mission of helping small brewers, distillers, and
                vintners get their products to market more efficiently while
                creating jobs, business opportunities, and providing support to
                veterans and their families is unique.{" "}
              </p>

              <p>
                More than just talk, MilServ is a “Benefit Corp.” with a
                self-selected fiduciary responsibility to give back to veterans
                and their families as part of its core business.
              </p>
              <a href="/about">
                <button className="btn btn-outline-light btn-md">
                  Meet Our Team
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}
