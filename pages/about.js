import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Biz2Biz from "../components/AboutCards/Biz2Bix";
import Dir2Consumer from "../components/AboutCards/Dir2Consumer";
// import OurTeam from "../components/AboutCards/OurTeam";
import VetTraining from "../components/AboutCards/VetTraining";

const About = () => {
  return (
    <Layout>
      <section className="aboutPage ml-0 pl-0">
        <div className="row">
          <div className="col-md-3">
            <a href="/">
              <p
                style={{
                  color: "white",
                  paddingLeft: "60px",
                  paddingTop: "100px",
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

        <div
          className="row"
          style={{ height: "50px", paddingTop: "30px", paddingLeft: "60px" }}
        >
          <div className="col-md-3">
            <h2 className="landing-cta about-header" id="landing-cta">
              ABOUT US
            </h2>
          </div>
        </div>
      </section>
      <section>
        {" "}
        <div className="row text-center justify-content-center mb-3">
          <div className="col-md-3 mt-3">
            <h2 className="program">
              <b style={{ color: "#383838" }}>OUR TEAM</b>
            </h2>
          </div>
        </div>
        <div className="row mb-3 ml-3">
          <div className="col-md-2 mt-4 mb-2">
            <img
              className="text-center"
              src={"../static/images/jeff.jpg"}
              width="100%"
            ></img>
          </div>
          <div className="col-md-10 mt-3 mb-2" style={{ fontSize: "1.15rem" }}>
            <h2>Jeff Slater</h2>
            <p>
              {" "}
              Jeff is co-founder, ideator, and acting President of MilServ ACD
              Corp. Jeff comes from a military family where both his parents
              served proudly and honorably. He ideated and co-founded MilServ
              ACD in their honor.
            </p>
            <b></b>
            Jeff is both a serial entrepreneur and a season global corporate
            executive. Jeff founded or co- founded Ninkatek ACB LLC (a SaaS
            software company for the US alcoholic beverage industry), Brewery
            Innovations LLC (an ideation company for the brewing industry),
            IS&amp;C Technologies (the owner of Tetricsity.com), and
            International Strategy &amp; Consulting Inc (a boutique global
            strategy consulting company).
            <p>
              {" "}
              His time as a global corporate executive included senior positions
              with global food and beverage companies including Diageo plc
              (alc-bev), Allied Domecq plc (alc-bev), PepsiCo, Royal Ahold (now
              Delhaize SA), and Dunkin Brands.{" "}
            </p>
            <p>
              Jeff started his career with DataGeneral (now part of Dell
              Technologies) and has consulted with numerous software companies.
            </p>{" "}
            <p>
              {" "}
              Jeff is focusing his social responsibility time finding ways to
              give back to our veteran heroes and their families and as a board
              member for the upcoming commemoration of the 400 th anniversary of
              the landing of the Mayflower and the formation of Plymouth Colony
              (Massachusetts) in 2020. <br></br>Jeff was born in the Hudson
              Valley of NY and lives in coastal Massachusetts with his wife and
              dog.
            </p>
            <div style={{ cursor: "pointer" }}>
              <a>
                <b style={{ fontSize: "0.85rem" }}>Connect with Jeff</b>{" "}
                <img
                  className="text-center"
                  src={"../static/images/li.png"}
                  width="2.3%"
                  style={{ borderRadius: 4 }}
                ></img>
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row mb-3 ml-3">
          <div className="col-md-2 mt-4 mb-2">
            {" "}
            <img
              className="text-center"
              src={"../static/images/david.jpg"}
              width="100%"
            ></img>
          </div>
          <div className="col-md-10 mt-3 mb-2" style={{ fontSize: "1.15rem" }}>
            <h2>David Jones</h2>
            <p>
              {" "}
              Jeff is co-founder, ideator, and acting President of MilServ ACD
              Corp. Jeff comes from a military family where both his parents
              served proudly and honorably. He ideated and co-founded MilServ
              ACD in their honor.
            </p>
            <b></b>
            Jeff is both a serial entrepreneur and a season global corporate
            executive. Jeff founded or co- founded Ninkatek ACB LLC (a SaaS
            software company for the US alcoholic beverage industry), Brewery
            Innovations LLC (an ideation company for the brewing industry),
            IS&amp;C Technologies (the owner of Tetricsity.com), and
            International Strategy &amp; Consulting Inc (a boutique global
            strategy consulting company).
            <p>
              {" "}
              His time as a global corporate executive included senior positions
              with global food and beverage companies including Diageo plc
              (alc-bev), Allied Domecq plc (alc-bev), PepsiCo, Royal Ahold (now
              Delhaize SA), and Dunkin Brands.{" "}
            </p>
            <p>
              Jeff started his career with DataGeneral (now part of Dell
              Technologies) and has consulted with numerous software companies.
            </p>{" "}
            <p>
              Jeff is focusing his social responsibility time finding ways to
              give back to our veteran heroes and their families and as a board
              member for the upcoming commemoration of the 400 th anniversary of
              the landing of the Mayflower and the formation of Plymouth Colony
              (Massachusetts) in 2020. <br></br>Jeff was born in the Hudson
              Valley of NY and lives in coastal Massachusetts with his wife and
              dog.
            </p>
            <div style={{ cursor: "pointer" }}>
              <a>
                <b style={{ fontSize: "0.85rem" }}>Connect with Jeff</b>{" "}
                <img
                  className="text-center"
                  src={"../static/images/li.png"}
                  width="2.3%"
                  style={{ borderRadius: 4 }}
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div
          className="row text-center justify-content-center"
          style={{ backgroundColor: "#ffc107", paddingTop: 25 }}
        >
          <div className="col-md-3 mt-3 mb-2">
            <h2 className="program">
              <b style={{ color: "#383838" }}>OUR SERVICES</b>
            </h2>
          </div>
        </div>
        <div
          className="row text-center justify-content-center"
          style={{ backgroundColor: "#ffc107", paddingBottom: 40 }}
        >
          <div className="col-md-3 staff-portal-cols mb-3">
            <Dir2Consumer />
          </div>

          <div className="col-md-3 staff-portal-cols mb-3">
            <Biz2Biz />
          </div>

          <div className="col-md-3 staff-portal-cols mb-3">
            <VetTraining />
          </div>
        </div>
        <div
          className="row text-center justify-content-center"
          style={{ paddingTop: 25 }}
        >
          <div className="col-md-3 mt-3 mb-2">
            <h2 className="program">
              <b style={{ color: "#383838" }}>OUR MISSION</b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 aboutSections"
            style={{ fontSize: "1.15rem", color: "#383838" }}
          >
            <p>
              We are current and former military veterans and their families.
              Our lives and business are built on a foundation of service and
              devotion to a greater good.
            </p>
            <p>
              American Craft Deliveries (ACD) MilServ has a mission to ensure
              every artisan beverage maker is provided frontline support for
              their success. We do this on the field, ensuring it’s leveled, for
              each craft beer, wine, and spirit to reach their ever-growing,
              selective target market fresh for the enjoyment of all.
            </p>

            <p>
              {" "}
              We allow small and large brewers alike the ability to get their
              product to a market that is under served. This way they can focus
              on what they do best, make innovative beers for passionate beer
              enthusiasts.
            </p>
            <p>
              {" "}
              No need to created a complicated logistics infrastructure, just
              place your beverage on our partner's (ACB) online market platform
              and let the orders start rolling in while we take care of all the
              deliveries.
            </p>
            <br></br>
            <button className="about-where-btn mb-5">
              Check if we're in your neck of the woods!
            </button>
          </div>
          {/* <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "#b19cd9" }}
          >
            <h3>WHY?</h3>
            <p>
              Artisan craft beer, spirits, and wines justly deserve affordable
              and accommodating delivery to retailers and restaurants who serve
              their diverse and discerning consumers. American Craft Delivery
              (ACD) MilServe, using emerging technology, provides efficient,
              expedient, professional business to business (B2B) services. Using
              America's Finest, Veterans and their spouses, we work to ensure
              just-in-time supply of manufacturers' products in the market.
            </p>
          </div> */}
          {/* <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "goldenrod" }}
          >
            <h3>WHERE?</h3>
            <p>
              {" "}
              We started in the quiet towns on Cape Cod MA, but now service all
              of New England and as far as Texas. We plan to be in every state
              within the next 5 years.
            </p> */}

          {/* </div> */}
          {/* <div
            className="col-md-12 aboutSections"
            style={{
              backgroundColor: "#228b22",
              paddingBottom: "2rem",
            }}
          >
            <h3>HOW?</h3>
            <p>
              American Craft Delivery MilServe gets craft beer, spirits, and
              wines delivered fresh using innovative technology, environmentally
              beneficial means, and the best resources America has to offer -
              our veterans and their spouses. Through a commitment to employ,
              contract, and benefit military service-members and their families,
              ACD MilServe adds value to the craft community while sharing the
              rewards with local service-members in need. ACD MilServe is
              committed to making positive long-lasting impact on every
              community, improving the environment, and enhancing the lives of
              military veterans and their families.
            </p>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
