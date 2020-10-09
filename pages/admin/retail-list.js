import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import RetailerList from "../../components/partners-retailers/RetailerATSList";

const DistributorATS = () => {
  return (
    <div style={{overflowX:"hidden"}}>
    <React.Fragment>
      <Layout>
        <Admin>
          <section className="staffPage ml-0 pl-0">
            <div className="row">
              <div className="col-md-3">
                <a href="/admin">
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "30px",
                      paddingTop: "100px",
                    }}
                  >
                    <span>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </span>{" "}
                    Back to Dashboard
                  </p>
                </a>
              </div>
            </div>
            <div
              className="row"
              style={{
                height: "180px",
                paddingTop: "30px",
                paddingLeft: "30px",
              }}
            >
              <div className="col-md-5">
              <h2 style={{color:"white", fontWeight:"700", backgroundColor:"rgba(0,0,0,50%)", padding:"5px"}}>
                 RETAILERS SUBMISSIONS
                </h2>
              </div>
            </div>

            <div className="row staff-portal-row justify-content-center">
              <RetailerList />
            </div>
          </section>
        </Admin>
      </Layout>
    </React.Fragment>
    </div>
  );
};

export default DistributorATS;
