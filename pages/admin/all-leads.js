import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import TabbedData from "./tabbeddata";


const RetailerATS = () => {
  return (
    <div style={{overflowX:"hidden"}}>
    <React.Fragment>
      <Layout>
        <Admin>
          <section className="staffPage m-0 p-0" style={{overflowX:"hidden"}}>
            <div className="row" style={{overflowX:"hidden"}}>
              <div className="col-md-3">
                <a href="/admin">
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "10px",
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
                height: "auto",
                paddingTop: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-10">
                <TabbedData/>
              </div>
            </div>

           
          </section>
        </Admin>
      </Layout>
    </React.Fragment>
    </div>
  );
};

export default RetailerATS;
