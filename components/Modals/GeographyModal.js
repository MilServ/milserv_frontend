import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import USAMap from "react-usa-map";

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

  //   const statesCustomConfig = () => {
  //     return {
  //       NJ: {
  //         fill: "#8d54b5 !important",
  //         clickHandler: (event) =>
  //           console.log("Custom handler for NJ", event.target.dataset),
  //       },
  //       NY: {
  //         fill: "#8d54b5",
  //       },
  //     };
  //   };

  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <>
      <button className="btn btn-outline-light btn-md" onClick={openModal}>
        Check if we're in your neck of the woods!
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Container>
          <Row>
            <Col xs={12} s={12} md={12} lg={12} style={{ marginTop: 60 }}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              />
            </Col>
          </Row>
          <Row
            style={{ justifyContent: "center" }}
            className="LearMoreModal App"
          >
            <Col xs={12} s={12} md={12} lg={12}>
              <h2 style={{ color: "white" }}>MILSERV LOCATIONS</h2>
              <small>Map best viewed on desktop computers</small>
              {/* <USAMap customize={statesCustomConfig} onClick={mapHandler} /> */}
              <USAMap onClick={mapHandler} />
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}
