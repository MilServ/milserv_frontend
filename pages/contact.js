import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section
          className="container-fluid mt-4"
          style={{ backgroundColor: "#383838" }}
        >
          {" "}
          <div
            className="row"
            style={{
              paddingBottom: 0,
              marginBottom: 0,
            }}
          >
            <a href="/" style={{ color: "white" }}>
              <p
                style={{
                  color: "#white",
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  paddingBottom: 0,
                  marginTop: 50,
                  marginBottom: 0,
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
          <div
            className="row text-center justify-content-center"
            style={{ backgroundColor: "#383838", paddingTop: 25 }}
          >
            <div className="col-md-6 mt-3 mb-2">
              <img
                src="../static/images/owllogo.jpg"
                width="20%"
                alt="Milserv owl logo"
                style={{ borderRadius: 8 }}
              />
              <h2 className="program" style={{ color: "white" }}>
                <b>We appreciate your feedback!</b>
              </h2>
              <h5 className="program" style={{ color: "white" }}>
                Please click on your partner profile below to be directed to the
                appropriate contact form.
              </h5>
            </div>
          </div>
          <hr style={{ backgroundColor: "white" }} />
          <div
            className="row text-center justify-content-center"
            style={{ paddingBottom: 40 }}
          >
            <div className="col-md-8 mt-3 mb-2">
              {" "}
              <div>
                <ul id="horizontal-list">
                  <li>
                    <a href="/veteran-jobs">
                      {" "}
                      <button className="btn btn-warning m-1">Veterans</button>
                    </a>
                  </li>

                  <li>
                    <a href="/retailers">
                      <button className="btn btn-warning m-1">Retailers</button>
                    </a>
                  </li>
                  <li>
                    <a href="/distributors">
                      <button className="btn btn-warning m-1">
                        Distributors
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="/makers">
                      {" "}
                      <button className="btn btn-warning m-1">Makers</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="row text-center justify-content-center"
            style={{ backgroundColor: "whitesmoke", paddingBottom: 10 }}
          >
            <div className="col-md-5 mt-3 mb-2">
              <h2 className="program" style={{ color: "#383838" }}>
                <b>Have a different reason for contacting us?</b>
              </h2>
            </div>
          </div>
          <div
            className="row text-center justify-content-center"
            style={{ backgroundColor: "whitesmoke", paddingBottom: 40 }}
          >
            <div className="col-md-6 mb-2">
              <p>
                <em>
                  Drop us a message at any of the social links below or simply
                  send an email to david.jones@acdmilserve.com.
                </em>
              </p>
              <SocialIcon url="https://www.instagram.com/milserv/" />
              <SocialIcon url="https://www.linkedin.com/company/american-craft-deliveries-milserve/" />
              <img
                src="../static/images/overlay.jpg"
                alt="milserv.com picture"
                width="100%"
                style={{ marginTop: 10, borderRadius: "4px" }}
              />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;
