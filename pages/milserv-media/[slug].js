import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { singleBlog, listRelated } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import SmallCard from "../../components/blog/SmallCard";
import DisqusThread from "../../components/DisqusThreads";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({ blog, query }) => {
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
      //Need if statement to handle response for No related articles.
      //Otherwise, client side will throw error
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  const head = () => (
    <Head>
      <title>
        {" "}
        {blog.title} | {APP_NAME}{" "}
      </title>
      <meta name="description" content={blog.mdesc} />

      <link rel="cannonical" href={`${DOMAIN}/milserv-media/${query.slug}`} />
      <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />

      <meta property="og:description" content={blog.mdesc} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${DOMAIN}/milserv-media/${query.slug}`}
      />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta
        property="og:image:secure_url"
        content={`${API}/blog/photo/${blog.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a
          className="mr-1 mt-3"
          style={{
            backgroundColor: "#8d54b5",
            color: "white",
            padding: 10,
            width: 50,
            borderRadius: "4px",
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </span>{" "}
          More {c.name}s
        </a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-warning btn-sm mr-1 ml-1">{t.name}</a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className="col-md-4" key={i}>
        <article>
          <SmallCard blog={blog} />
        </article>
      </div>
    ));
  };

  const showComments = () => {
    return (
      <div>
        <DisqusThread
          id={blog.id}
          title={blog.title}
          path={`/blog/${blog.slug}`}
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      {head()}
      <div style={{ overflow: "hidden" }}>
        <Layout>
          <main
            style={{
              minHeight: "500px",

              borderTop: "solid rgba(141, 84, 181, 0.85) 1.8px",
            }}
          >
            <article style={{ marginTop: "100px" }}>
              <div className="container-fluid">
                <section className="container">
                  <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                      <h2 className="pb-1 mb-0 font-weight-bold">
                        {blog.title}
                      </h2>
                      <small>
                        Written by{" "}
                        <Link
                          href={`/profile/${blog.postedBy.username}`}
                          prefetch={false}
                        >
                          <a>
                            {""}
                            {blog.postedBy.username}
                          </a>
                        </Link>
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                      <img
                        src={`${API}/blog/photo/${blog.slug}`}
                        alt={blog.title}
                        className="img img-thumbnail"
                        width="100%"
                      />
                      <br />
                      <small>
                        Published {moment(blog.updatedAt).fromNow()}
                      </small>

                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                      {renderHTML(blog.body)}
                    </div>
                  </div>
                  <div className="row center text-center">
                    <div
                      className="col-md-12 col-lg-12 col-sm-12 col-xs-12"
                      style={{ boder: "solid gray 2px" }}
                    >
                      <h6>TAGS </h6>
                      <p> {showBlogTags(blog)}</p>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="container mt-3 mb-3">
                    <div className="pb-3">{showBlogCategories(blog)}</div>
                  </div>
                </section>
              </div>

              <div
                className="container pb-5"
                style={{ backgroundColor: "whitesmoke", borderRadius: "8px" }}
              >
                <h5 className="text-center pt-3 mt-0 pb-5">RELATED ARTICLES</h5>
                <div className="row">{showRelatedBlog()}</div>
              </div>

              <div className="container pb-5">{showComments()}</div>
            </article>
          </main>
        </Layout>
      </div>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
