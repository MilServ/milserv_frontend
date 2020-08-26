import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import UserBlogCards from "../../components/UserPortal/UserBlogCards";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const UserIndex = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <Private>
          <div className="container-fluid staffPage ml-0 pl-0">
            <div
              className="row"
              style={{
                backgroundColor: "rgba(0,0,0,0.75)",
              }}
            >
              <div className="col-md-3">
                <a href="/">
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <span>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </span>{" "}
                    Back Home
                  </p>
                </a>
              </div>
              <div className="col-md-3">
                <a href="/user/update">
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>{" "}
                    Update Profile
                  </p>
                </a>
              </div>
            </div>
            <div
              className="row"
              style={{
                height: "180px",
                paddingTop: "30px",
                paddingLeft: "20px",
                marginBottom: 20,
              }}
            >
              <div className="col-md-5 col-sm-12 col-xs-12">
                <h2 className="landing-cta about-header ml-0" id="landing-cta">
                  STAFF DASHBOARD
                </h2>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <p
                  style={{
                    backgroundColor: "rgba(0,0,0,0.75)",
                    overflow: "hidden",
                    color: "white",
                    padding: 15,
                    fontStyle: "italic",
                    fontSize: "0.90rem",
                    textAlign: "center",
                  }}
                >
                  Welcome to the MilServ Staff Dashboard! Please contact David
                  Jones for additional data access.
                </p>
              </div>
            </div>

            <div className="row staff-portal-row text-center justify-content-center mt-4">
              {/* <div className="col-md-3 staff-portal-cols mb-3">
              <ManageCard />
            </div> */}

              <div className="col-md-3 staff-portal-cols mb-3">
                <UserBlogCards />
              </div>

              {/* <div className="col-md-3 staff-portal-cols mb-3">
              <VeteranCard />
            </div> */}
            </div>
          </div>
        </Private>
      </Layout>
    </div>
  );
};

export default UserIndex;
