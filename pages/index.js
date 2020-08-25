import { useState } from "react";
import Layout from "../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import LandingCardsOne from "../components/LandingCards/LandingCardsOne";
import LandingCardsTwo from "../components/LandingCards/LandingCardsTwo";
import LandingCardsThree from "../components/LandingCards/LandingCardsThree";
import LandingCardsFour from "../components/LandingCards/LandingCardsFour";

const Index = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section className="p-0 m-0" style={{ overflow: "hidden" }}>
          <div
            className="row justify-content-center m-0 p-0"
            style={{ overflow: "hidden" }}
          >
            <div className="col-md-12 text-center p-0">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../static/images/picone.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3
                      style={{
                        fontWeight: 800,
                        borderRadius: 4,
                        WebkitTextStroke: "1px black",
                        marginBottom: 0,
                      }}
                    >
                      MILSERV
                    </h3>
                    <p style={{ fontSize: ".98rem" }}>
                      <em>American Craft Deliveries Corporation</em>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../static/images/pictwo.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.45)",
                        borderRadius: 8,
                        padding: 1,
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          borderRadius: 4,
                          fontSize: "1.3rem",
                          marginBottom: 0,
                        }}
                      >
                        Welcome & Stay tuned!
                      </p>
                      <p>
                        We're officially launching our website on 9/15/2020!
                      </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../static/images/picthree.jpeg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    {/* <h3
                      style={{
                        fontWeight: 800,
                        borderRadius: 4,
                        WebkitTextStroke: "1px black",
                      }}
                    >
                      MILSERV
                    </h3> */}
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.45)",
                        borderRadius: 8,
                        padding: 1,
                      }}
                    >
                      {" "}
                      <p>
                        <em>
                          Supporting the Military Community through partnerships
                          with Makers, Retailers, and Distributors of Craft
                          Alcohol
                        </em>
                      </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              {/* <img
                className="landingTop"
                src={"../static/images/landing-image.jpg"}
              ></img> */}
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
          <div className="row mt-2 pl-0 pr-0">
            <div
              className="col-md-12 text-center aboutSections"
              style={{
                backgroundColor: "#8d54b5",
                padding: 30,
              }}
            >
              <img
                className="text-center img-thumbnail mb-1"
                src={"../static/images/owllogo.jpg"}
                width="90px"
                // height="20%"
              ></img>
              <h5 style={{ marginBottom: 0, paddingBottom: 0 }}>
                <b>Serving Those Who Serve</b>
              </h5>
              <p style={{ fontSize: "1.05rem" }}>
                The MilServ mission is to use the delivery of alcohol products
                in the US to create business opportunities, jobs, and
                distributable benefits for veterans, their families, and the
                non-government organizations (NGOs) that support them.
              </p>
            </div>
          </div>
        </section>
        <section className="landingSectionTwo text-center">
          <div className="row program-your-career pt-1">
            <h3 className="program text-center">
              <b style={{ color: "#383838" }}>OUR PARTNERS</b>
            </h3>
          </div>
          <div className="row program-your-career text-center justify-content-center pl-3">
            <div
              className="col-md-3 col-sm-10 text-center col-xs-10 mb-2 col-left p-0"
              style={{ overflowY: "hidden" }}
            >
              <a href="/veteran-jobs">
                <LandingCardsOne />
              </a>
            </div>
            <div
              className="col-md-3 col-sm-10 col-xs-10 mb-2 col-middle p-0"
              style={{ overflowY: "hidden" }}
            >
              <a href="/retailers">
                <LandingCardsTwo />
              </a>
            </div>
            <div
              className="col-md-3 col-sm-10 col-xs-10 mb-2 col-right p-0"
              style={{ overflowY: "hidden" }}
            >
              <a href="/distributors">
                <LandingCardsThree />
              </a>
            </div>
            <div
              className="col-md-3 col-sm-10 col-xs-10 mb-2 p-0"
              id="partner"
              style={{ overflowY: "hidden" }}
            >
              <LandingCardsFour />
            </div>
          </div>
        </section>
        <section style={{ paddingBottom: 20 }}>
          <div className="row pl-2">
            <div
              className="col-md-8 mb-2 aboutSections"
              style={{
                backgroundColor: "#8d54b5",
                padding: 20,
              }}
            >
              <h3 className="program">
                <b style={{ color: "#white" }}>PARTNER WITH US</b>
              </h3>
              <p style={{ fontSize: "1.05rem" }}>
                Through a commitment to employ, contract, and benefit military
                service-members and their families, MilServ ACD adds value to
                the craft community while sharing the rewards with local
                service-members in need.
              </p>
              <p style={{ fontSize: "1.05rem" }}>
                Partner with us today! Learn more by clicking on your partner
                category below.
              </p>
              <div>
                <ul id="horizontal-list">
                  <li>
                    <a href="/veteran-jobs">
                      {" "}
                      <button className="btn btn-outline-light mb-1">
                        Veterans
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="/retailers">
                      <button className="btn btn-outline-light mb-1 ml-1">
                        Retailers
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="/distributors">
                      <button className="btn btn-outline-light mb-1 ml-1">
                        Distributors
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="makers">
                      {" "}
                      <button className="btn btn-outline-light mb-1">
                        Makers
                      </button>
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
    </div>
  );
};

export default Index;
