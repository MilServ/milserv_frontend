import React from "react";
import Layout from "../components/Layout";
import DistSignUpForm from "../components/partners-distributors/DistributorForm";
import DistVideoCard from "../components/partners-distributors/DistributorVideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Distributors = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section className="m-0 pl-0">
          <div className="row mt-3 justify-content-center p-0">
            <h3 className="program text-center">
              <b style={{ color: "#383838" }}>DISTRIBUTORS</b>
            </h3>
          </div>
          <div className="row m-0 justify-content-center p-0">
            <div className="col-md-6 p-0 m-0" style={{ zIndex: 3 }}>
              <a
                href="/"
                style={{
                  color: "black",
                  paddingLeft: "4px",
                  paddingTop: "20px",
                  display: "aboslute",
                }}
              >
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>{" "}
                Back Home
              </a>

              <img
                className="landingTop"
                src={"../static/images/distributors.jpeg"}
              ></img>
            </div>
          </div>

          <div
            className="row"
            style={{ height: "0px", paddingTop: "30px", paddingLeft: "60px" }}
          >
            <div className="col-md-4">
              {/* <div style={{ display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faFlagUsa}
                style={{
                  fontSize: "3rem",
                  color: "white",
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              />
            </div> */}
              <h2 className="landing-cta about-header" id="landing-cta">
                JOBS FOR VETERANS
              </h2>
            </div>
          </div>
        </section>
        <section className="aboutSectionTwo ml-0">
          {" "}
          <div className="row">
            <div
              className="col-md-6 aboutSections"
              style={{ backgroundColor: "goldenrod", paddingTop: 20 }}
            >
              <DistVideoCard />
            </div>

            <div
              className="col-md-6 aboutSections"
              style={{ backgroundColor: "whitesmoke", paddingTop: 50 }}
            >
              <DistSignUpForm />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Distributors;
