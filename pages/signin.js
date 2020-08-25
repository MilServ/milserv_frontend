import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <div className="signinPage container-fluid">
          <div className="row">
            <div className="col-md-12">
              <SigninComponent />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Signin;
