import React from "react";
import Layout from "../components/Layout";
import RetSignUpForm from "../components/partners-retailers/RetailerForm";
import RetVideoCard from "../components/partners-retailers/RetailerVideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";

const Retailers = () => {
  return (
    <Layout>
      <section className="aboutSectionTwo ml-0 mt-4">
        {" "}
        <div className="row">
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "#bb6125", paddingTop: 20 }}
          >
            <RetVideoCard />
          </div>
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "#383838", paddingTop: 50 }}
          >
            <RetSignUpForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retailers;
