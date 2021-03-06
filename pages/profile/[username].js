import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
import ContactForm from "../../components/form/ContactForm";

const UserProfile = ({ user, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {" "}
        {user.username} | {APP_NAME}{" "}
      </title>
      <meta name="description" content={`Blogs by ${user.username}`} />
      <link rel="cannonical" href={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:title" content={`${user.username} | ${APP_NAME}`} />

      <meta property="og:description" content={`Blogs by ${user.username}`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/landing-image.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/landing-image.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <div className="mt-4 mb-4" key={i}>
          <Link href={`/milserv-media/${blog.slug}`}>
            <a className="lead">{blog.title}</a>
          </Link>
        </div>
      );
    });
  };
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="container" style={{backgroundColor:"#383838"}}>
          <div className="row" style={{marginTop:"110px"}}>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src={`${API}/user/photo/${user.username}`}
                        className="img img-fluid img-thumbnail mb-3"
                        style={{ maxHeight: "120px", maxWidth: "100%" }}
                        alt="user profile"
                      />
                      <h5 style={{ color: "black" }}>{user.name}</h5>

                      <p className="text-muted">
                        Joined {moment(user.createdAt).fromNow()}
                      </p>
                    </div>

                    {/* <div className="col-md-4">
                     
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6">
              <div style={{ height: "auto", paddingBottom: 15 }}>
                <div className="card-body" style={{ height: "auto" }}>
                  <h5
                    className="card-title pt-4 pb-4 pl-4 pr-4"
                    style={{ backgroundColor: "#8d54b5", color: "white" }}
                  >
                    Recent articles by {user.name}
                  </h5>

                  <p className="pl-3">{showUserBlogs()}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ height: "auto", paddingBottom: 15 }}>
                <div className="card-body" style={{ height: "auto" }}>
                  <h5
                    className="card-title pt-4 pb-4 pl-4 pr-4"
                    style={{ backgroundColor: "#8d54b5", color: "white" }}
                  >
                    Message {user.name}
                  </h5>
                  <br />
                  <p style={{ backgroundColor: "#8d54b5" }}>
                    <ContactForm value={"For" + user.name} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  return userPublicProfile(query.username).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};
export default UserProfile;
