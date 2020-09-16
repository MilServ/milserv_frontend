import React from "react";
import Layout from "../components/Layout";
import MakersSignUpForm from "../components/partners-makers/MakersForm";
import MakersVideoCard from "../components/partners-makers/MakersVideoCard";

const Makers = () => {
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
              <MakersVideoCard />
            </div>

            <div
              className="col-md-6 aboutSections"
              style={{ backgroundColor: "#383838", paddingTop: 50 }}
            >
              <MakersSignUpForm />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Makers;
