import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";

const Signup = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <div className="signinPage container-fluid">
          <div className="row">
            <div className="col-md-12">
              <SignupComponent />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Signup;
