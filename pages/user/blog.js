import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import BlogCreate from "../../components/crud/BlogCreate";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-12 pb-15 mt-4 pl-4"
              style={{ backgroundColor: "#8d54b5", color: "white" }}
            >
              <p style={{ paddingBottom: 0, marginBottom: 0 }}>
                <em>American Craft Deliveries</em>
              </p>
              <h3
                style={{
                  paddingTop: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingBottom: 10,
                }}
              >
                PUBLISHING CENTER
              </h3>
            </div>
            <div className="col-md-12 mt-3">
              <BlogCreate />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
