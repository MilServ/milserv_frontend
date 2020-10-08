import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
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
    backgroundColor: "white",
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

export default function JobsModalNY(props) {
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
      <Button
        variant="contained"
        onClick={openModal}
        style={{ marginTop: "20px" }}
      >
        <b>Our Services</b>
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container>
          <Row style={{ justifyContent: "center", marginTop: 130 }}>
            <Col xs={12} s={12} md={12} lg={12}>
              <FontAwesomeIcon
                icon={faTimesCircle}
                onClick={closeModal}
                style={{ cursor: "pointer", color: "#383838", marginTop: 10 }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              s={12}
              md={8}
              lg={8}
              style={{
                backgroundColor: "white",
                textAlign: "left",
                padding: "20px",
              }}
            >
              <div style={{ backgroundColor: "rgba(255,255,255,.90)" }}>
                <img src={"../../static/images/owllogo.jpg"} width="30%" />
                <p
                  style={{
                    color: "#383838",
                    fontWeight: "900",
                    fontFamily: "Arial",
                    marginBottom: 0,
                    paddingBottom: 0,
                    fontSize: ".86rem",
                  }}
                >
                  MilServ ACD Corp.
                </p>
                <h1
                  style={{
                    color: "#8d54b5",
                    fontWeight: "900",
                    fontFamily: "Arial",
                    marginBottom: 0,
                    marginTop: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    fontSize: "1.7rem",
                  }}
                >
                  A VETERAN OWNED
                </h1>
                <h2
                  style={{
                    color: "#383838",
                    fontWeight: "900",
                    fontFamily: "Arial",
                    marginBottom: 0,
                    marginTop: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    fontSize: "1.6rem",
                  }}
                >
                  PROFESSIONAL DELIVERY SERVICE
                </h2>
                <h1
                  style={{
                    color: "#8d54b5",
                    fontWeight: "900",
                    fontFamily: "Arial",
                    marginBottom: 0,
                    marginTop: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    fontSize: "1.3rem",
                  }}
                >
                  FOR BEER/WINE/SPIRITS
                </h1>
                <p
                  style={{
                    color: "#383838",
                  }}
                >
                  B2B,{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      textUnderlinePosition: "bottom",
                    }}
                  >
                    and now providing D2C Service
                  </span>
                </p>
                <p style={{ fontWeight: 400, color: "#383838" }}>
                  MilServ ACD Corp. hires the most skilled military veterans our
                  nation has to offer and puts them through a rigorous training
                  program. Resulting in professional deliveries that brands and
                  retailers can be proud of.
                </p>
                <p
                  style={{
                    backgroundColor: "#383838",
                    padding: 4,
                    display: "inline-block",
                  }}
                >
                  <em>All we do is deliver alcohol products!</em>
                </p>
                <br />
                <p
                  style={{
                    backgroundColor: "#383838",
                    padding: 4,
                    display: "inline-block",
                  }}
                >
                  <em>Deliveries 6 / 7 days a week!</em>
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              s={12}
              md={4}
              lg={4}
              style={{
                backgroundColor: "#8d54b5",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  marginBottom: "25px",
                  backgroundColor: "white",
                  color: "#383838",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              >
                <h3>
                  <em>Our Service Includes</em>
                </h3>
              </div>
              <h4 className="jobsModalFeatures">
                Industry best practices for ID verification to protect the
                seller
              </h4>
              <hr className="jobsHr" />
              <h4 className="jobsModalFeatures">
                Bonded & insured company vehicles
              </h4>
              <hr className="jobsHr" />
              <h4 className="jobsModalFeatures">
                $1m liability & property damage
              </h4>
              <hr className="jobsHr" />

              <h4 className="jobsModalFeatures">
                GPS Real-Time tracking on products
              </h4>
              <hr className="jobsHr" />
              <h4 className="jobsModalFeatures">
                All Trucks licensed with the SLA
              </h4>
              <hr className="jobsHr" />
              <br />
              <a href="/veteran-jobs">
                <button className="btn btn-outline-light btn-lg">
                  Fill Out Form For More Info
                </button>
              </a>
              <Col xs={12} s={12} md={12} lg={12}>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  onClick={closeModal}
                  style={{ cursor: "pointer", color: "white", marginTop: 10 }}
                />
              </Col>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}
