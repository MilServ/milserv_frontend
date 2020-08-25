import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <section className="aboutPage ml-0 pl-0" style={{ height: "auto" }}>
        <div className="row">
          <div className="col-md-3">
            <a href="/">
              <p
                style={{
                  color: "white",
                  paddingLeft: "60px",
                  paddingTop: "100px",
                }}
              >
                <small>
                  <span>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </span>{" "}
                  Back Home
                </small>
              </p>
            </a>
          </div>
        </div>

        <div
          className="row justify-content-center text-center"
          style={{ height: "50px", paddingTop: "30px" }}
        >
          <div className="col-md-12 justify-content-center">
            <h1 className="landing-cta about-header" id="landing-cta">
              CONTACT
            </h1>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{
            paddingTop: "50px",
            paddingLeft: "60px",
            marginBottom: 100,
            paddingBottom: 50,
          }}
        >
          <div
            className="col-md-6"
            style={{ backgroundColor: "rgba(255,255,255,0.75" }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="aboutSectionTwo ml-0"></section>
    </Layout>
  );
};

export default Contact;
