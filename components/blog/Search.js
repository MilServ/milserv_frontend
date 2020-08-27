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
        message: `${data.length} Article(s) found`,
      });
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
        className="jumbotron bg-white"
        style={{
          color: "black",
          marginTop: 30,
          height: "auto",
          marginBottom: 30,
        }}
      >
        {message && (
          <p className="text-muted font-italic mt-3" style={{ paddingTop: 15 }}>
            {message}
          </p>
        )}

        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/milserv-media/${blog.slug}`}>
                <ul>
                  <li>
                    {" "}
                    <a className="text-primary" style={{ cursor: "pointer" }}>
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
        backgroundColor: "transparent",
      }}
    >
      <div
        className="row justify-content-center mb-1"
        style={{ textAlign: "right", justifyContent: "end" }}
      >
        <div className="col-md-5 m-1">
          <input
            type="search"
            style={{ backgroundColor: "#383838", color: "white" }}
            className="form-control search-form"
            placeholder="Search MilServ Media"
            onChange={handleChange}
          ></input>
        </div>

        <div className="col-md-2 m-1">
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
    <div className="container-fluid">
      <div>{searchForm()}</div>
      {searched && (
        <div style={{ marginTop: "-120px", marginBottom: "-80px" }}>
          {searchedBlogs(results)}{" "}
        </div>
      )}
    </div>
  );
};

export default Search;
