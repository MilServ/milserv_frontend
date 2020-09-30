import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });
  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: ` ${data.length} Article(s) found`,
      });
    });
  };
  const closeSearchResults = () => {
    setValues({
      ...values,
      searched: false,
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };
  const searchedBlogs = (results = []) => {
    return (
      <div
        style={{
          color: "white",
          backgroundColor: "rgba(0,0,0,90%)",
          borderRadius: "10px",
          // marginTop: 150,
          height: "auto",
          marginBottom: 30,
          padding: 10,
          overflow: "auto",
        }}
        className="searchResults"
      >
        {message && (
          <p
            className="text-muted font-italic"
            style={{ paddingTop: 15, marginTop: "10px" }}
          >
            {message}
            <button
              className="btn btn-sm"
              type="submit"
              onClick={closeSearchResults}
              style={{
                float: "right",
                margin: 4,
                backgroundColor: "#8d54b5",
                color: "white",
              }}
            >
              X
            </button>
          </p>
        )}

        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/milserv-media/${blog.slug}`}>
                <ul>
                  <li>
                    {" "}
                    <a
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      {blog.title}
                    </a>
                  </li>
                </ul>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };
  const searchForm = () => (
    <form
      onSubmit={searchSubmit}
      style={{
        paddingTop: 0,
        paddingBottom: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        className="row justify-content-center mb-1"
        style={{ textAlign: "right", justifyContent: "end" }}
      >
        <div className="col-md-7 pr-0 pl-0 col-lg-7 col-sm-12 col-xs-12 m-1">
          <input
            type="search"
            style={{ backgroundColor: "#383838", color: "white" }}
            className="form-control search-form"
            placeholder="Search MilServ Media"
            onChange={handleChange}
          ></input>
        </div>

        <div className="col-md-4 pl-0 pr-0 col-lg-4   col-sm-12 col-xs-12 m-1">
          <button
            className="btn btn-block"
            type="submit"
            style={{
              backgroundColor: "#8d54b5",
              color: "white",
              marginBottom: 3,
            }}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <div style={{ width: "100%" }}>{searchForm()}</div>
      {searched && (
        <div style={{ marginTop: "10px", marginBottom: "-80px" }}>
          {searchedBlogs(results)}{" "}
        </div>
      )}
    </div>
  );
};

export default Search;
