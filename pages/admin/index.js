import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import BlogCard from "../../components/StaffPortal/BlogCard";
import ManageCard from "../../components/StaffPortal/ManageCard";
import CreateCard from "../../components/StaffPortal/CreateCard";
import SiteAnalytics from "../../components/StaffPortal/SiteAnalytics";
import VeteranCard from "../../components/StaffPortal/VeteranCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faUser, faChartLine
} from "@fortawesome/free-solid-svg-icons";

const AdminIndex = () => {
  return (
    <div style={{ overflow: "hidden" }}>
    <Layout>
    
        <Admin>
          <section
            className="container-fluid staffPage ml-0 pl-0 pr-0"
            style={{ overflow: "hidden"}}
          >
            <div style={{backgroundColor: "rgba(0,0,0,0.75)", paddingTop:"90px", maxWidth:"100%"}}>
            <div
              className="row"
              style={{
              
                overflow: "hidden"
                
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
                <a href="/admin/update">
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
            </div>
            <div
              className="row justify-content-center"
              style={{
                height: "180px",
                paddingTop: 20,
                backgroundColor: "rgba(0,0,0,0.65)",
              }}
            >
              <div className="col-md-12 text-center">
                <h2
                 
                  style={{ fontSize: "2rem", color:"white" }}
                  id="landing-cta"
                >
                  <FontAwesomeIcon icon={faChartLine}/>{" "}
                  STAFF DASHBOARD
                </h2>
              </div>
            </div>

            <div className="row staff-portal-row text-center justify-content-center">
              <div className="col-md-3 staff-portal-cols mb-3">
                <ManageCard />
              </div>

              <div className="col-md-3 staff-portal-cols mb-3">
                <BlogCard />
              </div>

              <div className="col-md-3 staff-portal-cols mb-3">
                <VeteranCard />
              </div>
              <div className="col-md-3 staff-portal-cols mb-3">
                <SiteAnalytics />
              </div>
            </div>
          </section>
        </Admin>
     
    </Layout>
    </div>
  );
};

export default AdminIndex;
