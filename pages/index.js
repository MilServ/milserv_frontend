import Layout from "../components/Layout";
import Link from "next/link";
import LandingCardsOne from "../components/LandingCards/LandingCardsOne";
import LandingCardsTwo from "../components/LandingCards/LandingCardsTwo";
import LandingCardsThree from "../components/LandingCards/LandingCardsThree";
import LandingCardsFour from "../components/LandingCards/LandingCardsFour";

const Index = () => {
  return (
    <Layout>
      <section className="landingTop p-0 m-0">
        <div
          className="row justify-content-center m-0 p-0"
          style={{ width: "100%", overflow: "hidden" }}
        >
          <div
            className="col-md-4 centered"
            style={{
              marginTop: 100,
              textAlign: "center",
              paddingTop: 10,
            }}
          >
            <div>
              <img
                className="text-center"
                src={"../static/images/owllogo.jpg"}
                width="40%"
                height="40%"
              ></img>
            </div>
            <h1 className="landing-cta" id="landing-cta">
              YOUR SOLUTION FOR ALCOHOL DELIVERIES
            </h1>
          </div>
        </div>
      </section>
      <section
        style={{
          paddingBottom: 20,
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        <div className="program-your-career pt-3 pb-4">
          <h2 className="program text-center">
            <b style={{ color: "#383838" }}>OUR PURPOSE</b>
          </h2>
        </div>
        <div className="row pl-3">
          <div className="col-md-3 col-left">
            <img
              className="text-center"
              src={"../static/images/owllogo.jpg"}
              width="80%"
              height="80%"
              style={{
                position: "absolute",
                top: "50%",
                msTransform: "translateX(-50%)",
                transform: "translateY(-50%)",
              }}
            ></img>
          </div>
          <div
            className="col-md-8 mb-2 aboutSections"
            style={{
              backgroundColor: "#8d54b5",
              padding: 30,
            }}
          >
            <h2>MilServ Supports Those Who Serve</h2>
            <p style={{ fontSize: "1.35rem" }}>
              Our mission is to use the delivery of alcohol products in the US
              to create business opportunities, jobs, and distributable benefits
              for veterans, their families, and the non-government organizations
              (NGOs) that support them.
            </p>
          </div>
        </div>
      </section>
      <section className="landingSectionTwo text-center">
        <div className="row program-your-career pt-3 pb-4">
          <h2 className="program text-center">
            <b style={{ color: "#383838" }}>OUR PARTNERS</b>
          </h2>
        </div>
        <div className="row program-your-career text-center pl-3">
          <div className="col-md-3 col-sm-10 text-center col-xs-10 mb-2 col-left p-0">
            <a href="/veteran-jobs">
              <LandingCardsOne />
            </a>
          </div>
          <div className="col-md-3 col-sm-10 col-xs-10 mb-2 col-middle p-0">
            <a href="/retailers">
              <LandingCardsTwo />
            </a>
          </div>
          <div className="col-md-3 col-sm-10 col-xs-10 mb-2 col-right p-0">
            <a href="/distributors">
              <LandingCardsThree />
            </a>
          </div>
          <div className="col-md-3 col-sm-10 col-xs-10 mb-2 p-0" id="partner">
            <LandingCardsFour />
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: 20 }}>
        <div className="program-your-career pt-3 pb-4">
          <h2 className="program text-center">
            <b style={{ color: "#383838" }}>PARTNER WITH US</b>
          </h2>
        </div>
        <div className="row pl-3">
          <div
            className="col-md-8 mb-2 aboutSections"
            style={{
              backgroundColor: "#8d54b5",
              padding: 20,
            }}
          >
            <p style={{ fontSize: "1.35rem" }}>
              Through a commitment to employ, contract, and benefit military
              service-members and their families, MilServ ACD adds value to the
              craft community while sharing the rewards with local
              service-members in need.
            </p>
            <p style={{ fontSize: "1.35rem" }}>
              Partner with us today! Learn more by clicking on your partner
              category below.
            </p>
            <div>
              <ul id="horizontal-list">
                <li className="p-2">
                  <a href="/veteran-jobs">
                    {" "}
                    <button className="btn btn-outline-light m-1">
                      Veterans
                    </button>
                  </a>
                </li>

                <li className="p-2">
                  <a href="/retailers">
                    <button className="btn btn-outline-light">Retailers</button>
                  </a>
                </li>
                <li className="p-2">
                  <a href="/distributors">
                    <button className="btn btn-outline-light">
                      Distributors
                    </button>
                  </a>
                </li>
                <li className="p-2">
                  <a href="makers">
                    {" "}
                    <button className="btn btn-outline-light">Makers</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-2 col-left p-0">
            <img
              className="text-center"
              src={"../static/images/servingthose.jpg"}
              width="100%"
              height="100%"
            ></img>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
