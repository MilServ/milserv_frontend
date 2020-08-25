import React from "react";
import Layout from "../components/Layout";
import DistSignUpForm from "../components/partners-distributors/DistributorForm";
import DistVideoCard from "../components/partners-distributors/DistributorVideoCard";

const Distributors = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section className="aboutSectionTwo ml-0 mt-4">
          {" "}
          <div className="row">
            <div
              className="col-md-6 aboutSections"
              style={{ backgroundColor: "#bb6125", paddingTop: 20 }}
            >
              <DistVideoCard />
            </div>

            <div
              className="col-md-6 aboutSections"
              style={{ backgroundColor: "#383838", paddingTop: 50 }}
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
