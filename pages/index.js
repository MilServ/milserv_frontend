import { useState } from "react";
import Layout from "../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import LandingCardsOne from "../components/LandingCards/LandingCardsOne";
import LandingCardsTwo from "../components/LandingCards/LandingCardsTwo";
import LandingCardsThree from "../components/LandingCards/LandingCardsThree";
import LandingCardsFour from "../components/LandingCards/LandingCardsFour";
import LearnMoreModal from "../components/Modals/LearnMoreModal";

const Index = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleAlert = () => {
    alert(
      "Thank you for your interest.  Please check back soon for more information on our Makers Partners"
    );
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section className="mt-3" style={{ overflow: "hidden" }}>
          <div
            className="row justify-content-center pt-4"
            style={{
              overflow: "hidden",
            }}
          >
            {/* <div className="row mt-2 pl-0 pr-0"> */}

            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-center p-0">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                style={{ zIndex: 0 }}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../static/images/picone.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div
                      style={{
                        backgroundColor: "rgba(141, 84, 181, 0.60)",
                        padding: 1,
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: 800,
                          WebkitTextStroke: "1px black",
                          marginBottom: 0,
                        }}
                      >
                        MILSERV
                      </h3>
                      <h6 style={{ fontSize: ".98rem" }}>
                        <em>American Craft Deliveries Corporation</em>
                      </h6>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../static/images/fourbeers.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.60)",
                        padding: 1,
                      }}
                    >
                      <h6
                        style={{
                          borderRadius: 4,

                          marginBottom: 0,
                        }}
                      >
                        Welcome & Stay tuned!
                      </h6>
                      <h6>
                        <em>
                          We're officially launching our website on 10/1/2020!
                        </em>
                      </h6>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../static/images/pictest.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,.60)",
                        padding: 1,
                      }}
                    >
                      {" "}
                      <h5 style={{ fontWeight: "400" }}>
                        <em>
                          Supporting the Military Community through partnerships
                          with Makers, Retailers, and Distributors of Craft
                          Alcohol
                        </em>
                      </h5>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              {/* <img
                className="landingTop"
                src={"../static/images/landing-image.jpg"}
              ></img> */}
            </div>
            <div
              className="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center aboutSections"
              style={{
                backgroundColor: "#8d54b5",
                padding: 40,
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
              <div>
                {" "}
                <LearnMoreModal />
              </div>
            </div>
          </div>
        </section>

        <section className="landingSectionTwo text-center">
          <div className="row program-your-career pt-4">
            <h3 className="program text-center" style={{ paddingTop: "40px" }}>
              <b style={{ color: "white" }}>OUR PARTNERS</b>
            </h3>
          </div>
          <div
            className="row program-your-career text-center justify-content-center pl-3"
            style={{ paddingBottom: "50px" }}
          >
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
              <a href="/makers">
                <LandingCardsFour />
              </a>
            </div>
          </div>
        </section>
        <section>
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
                    <a href="/makers">
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
                src={"../static/images/overlay.jpg"}
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
