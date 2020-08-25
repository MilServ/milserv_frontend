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
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section className="aboutSectionTwo m-0 mt-4">
          {" "}
          <div className="row">
            <div
              className="col-md-6 aboutSections"
              style={{ backgroundColor: "#bb6125", paddingTop: 30 }}
            >
              <VetVideoCard />
            </div>
            <div
              className="col-md-6 aboutSections"
              style={{ backgroundColor: "#383838", paddingTop: 50 }}
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
    </div>
  );
};

export default VeteranJobs;
