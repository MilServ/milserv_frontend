import Link from "next/link";
import { API } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";

const SmallCard = ({ blog }) => {
  return (
    <div>
      <div style={{ border: "solid lightgray 1px", borderRadius: "8px" }}>
        <section style={{ textAlign: "center", paddingTop: "10px" }}>
          <Link href={`/milserv-media/${blog.slug}`}>
            <a>
              <img
                className="img img-fluid"
                style={{
                  maxHeight: "auto",
                  width: "60%",
                  textAlign: "center",
                  borderRadius: "4px",
                }}
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
              />
            </a>
          </Link>
        </section>

        <div className="card-body">
          <section>
            <Link href={`/milserv-media/${blog.slug}`}>
              <a>
                {" "}
                <h5 className="card-title">{blog.title}</h5>
              </a>
            </Link>
            <p style={{ color: "black" }}>{renderHTML(blog.excerpt)}</p>
          </section>
        </div>

        <div className="card-body">
          Published {moment(blog.updatedAt).fromNow()} by:{" "}
          <b>
            <Link href={`/profile/${blog.postedBy.username}`}>
              <a>{blog.postedBy.username}</a>
            </Link>
          </b>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
