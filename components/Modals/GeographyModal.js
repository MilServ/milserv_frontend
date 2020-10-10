import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import USAMap from "react-usa-map";
import Button from "@material-ui/core/Button";

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

export default function OurLocationsModal(props) {
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
      <Button
        variant="contained"
        onClick={openModal}
        style={{ marginTop: "20px", height:"50px", fontSize:"1rem" }}
      >
        <FontAwesomeIcon icon={faFlagUsa} />{" "}
        <b style={{ paddingLeft: 2 }}> OUR LOCATIONS</b>
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Container  onClick={closeModal}>
          <Row>
            <Col
              className="geoModal"
              xs={12}
              s={12}
              md={12}
              lg={12}
              style={{ marginTop: 90 }}
            >
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
            <Col
              xs={12}
              s={12}
              md={12}
              lg={12}
              style={{
                margin: "0",
                textAlign: "center",
              }}
            >
              <img
                src={"../../static/images/owllogo.jpg"}
                width="50px"
                style={{ textAlign: "center", borderRadius: "6px" }}
              />
            </Col>
          </Row>
          <Row
            style={{ justifyContent: "center" }}
            className="LearMoreModal App"
          >
            <Col
              xs={12}
              s={12}
              md={12}
              lg={12}
              style={{
                margin: "0",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  marginBottom: "0px",
                  paddingBottom: "0px",
                  fontWeight: "700",
                }}
              >
                MILSERV LOCATIONS
              </h3>
              <small style={{ lineHeight: "-1" }}>milserv.com</small>
              {/* <USAMap customize={statesCustomConfig} onClick={mapHandler} /> */}
            </Col>
          </Row>
          <Row style={{ overflowX: "visible" }}>
            <Col xs={12} s={12} md={12} lg={12} style={{ marginTop: 0 }}>
              <USAMap onClick={mapHandler} />
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}
