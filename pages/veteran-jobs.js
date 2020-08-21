import Layout from "../components/Layout";
import VetSignUpForm from "../components/partners-veterans/VetSignUpForm";
import VetVideoCard from "../components/partners-veterans/VetVideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";

const VeteranJobs = () => {
  return (
    <Layout>
      <section className="aboutPage ml-0 pl-0">
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
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>{" "}
                Back Home
              </p>
            </a>
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
            style={{ backgroundColor: "#bb6125", paddingTop: 50 }}
          >
            <VetVideoCard />
          </div>
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "whitesmoke", paddingTop: 50 }}
          >
            <VetSignUpForm />
          </div>
        </div>
      </section>

      <section className="aboutSectionTwo ml-2">
        {" "}
        <div
          className="row justify-content-center pt-4 pb-4"
          style={{ backgroundColor: "white", padding: 25 }}
        >
          <div className="col-md-7 aboutSections">
            <img
              className="mb-2"
              src={"../static/images/skillbridge.png"}
              width="55%"
            ></img>
            {/* <p>
              According to the DOD, approximately 200,000 members of the U.S. Military
              separate from active duty each year and re-enter the civilian
              work force or pursue higher education.</p> */}
            <p
              style={{
                fontSize: "1.19rem",
                color: "#383838",
                fontWeight: "400",
                marginTop: 10,
              }}
            >
              MilServ is a proud industry parnter of the DOD SkillBridge
              program. Through this partnership, we're committed to providing
              transitioning servicemembers early access to civilian work
              experience and skills. Let's get your civilian career going!
              Contact us today to learn more.
            </p>

            <p></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VeteranJobs;
