import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
// import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const head = () => (
    <Head>
      <title> MilServ News | {APP_NAME} </title>
      <meta name="description" content="MILSERV MEDIA" />

      <link rel="cannonical" href={`${DOMAIN}${router.pathname}`} />
      <meta property="og:title" content={`MILSERV MEDIA | ${APP_NAME}`} />

      <meta property="og:description" content="MILSERV MEDIA" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
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

  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(blogSkip);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-dark btn-sm">
          Load more
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <article key={i}>
          <Card blog={blog} />
          <hr />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className="btn btn-info btn-sm mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className="btn btn-warning btn-sm mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      {/* <Layout style={{ margin: 0, padding: 0 }}> */}
      <main style={{ margin: 0, padding: 0 }}>
        <div className="container m-0 p-0">
          <header
            className="milservMedia container"
            style={{
              height: 550,
              margin: 0,
              padding: 0,
            }}
          >
            <div className="row">
              <div className="col-md-3">
                <a href="/">
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "15px",
                      paddingTop: "10px",
                      fontSize: ".90rem",
                    }}
                  >
                    <span>
                      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </span>{" "}
                    Back Home
                  </p>
                </a>
              </div>
            </div>
            <div className="row p-0 m-0">
              <div className="col-md-12 pt-4 mt-4 mb-2 pb-2">
                <h1
                  className="text-center landing-cta"
                  style={{ fontSize: "4rem", marginBottom: 35 }}
                >
                  MILSERV MEDIA
                </h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-md-4"
                style={{
                  textAlign: "center",
                  marginBottom: 25,
                }}
              >
                <h5
                  style={{
                    fontWeight: "900",
                    backgroundColor: "rgba(0,0,0,0.50)",
                    padding: 5,
                    color: "white",
                  }}
                >
                  CATEGORIES
                </h5>
                {showAllCategories()}
              </div>

              <div
                className="col-md-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h5
                  style={{
                    fontWeight: "900",
                    marginBottom: "0px",
                    backgroundColor: "rgba(0,0,0,0.50)",
                    padding: 5,
                    color: "white",
                  }}
                >
                  TAGS
                </h5>
                {showAllTags()}
              </div>
            </div>
          </header>
        </div>
        <div className="container-fluid">
          <hr />

          <div className="row pl-3">
            <div
              className="col-md-12"
              style={{ borderRight: "solid lightgray 1px" }}
            >
              {showAllBlogs()}
            </div>
            <div
              className="col-md-12"
              style={{ borderRight: "solid lightgray 1px" }}
            >
              {showLoadedBlogs()}
            </div>
            <div
              className="col-md-12 pb-5"
              style={{ borderRight: "solid lightgray 1px" }}
            >
              {loadMoreButton()}
            </div>
          </div>
        </div>
      </main>
      {/* </Layout> */}
    </React.Fragment>
  );
};

Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 2;

  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};

export default withRouter(Blogs);
