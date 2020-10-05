import React from "react";
import { isAuth } from "../actions/auth";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer color="blue" className="font-small pt-4 mt-4 pb-4">
        <div className="footer-container">
          <div className="row text-center p-2">
            <div className="col-md-3 pb-2 footerLogo pr-0">
              <h3 style={{ color: "#8d54b5", marginBottom: 0 }}>MILSERV</h3>
              <p style={{ color: "#8d54b5", marginBottom: 1 }}>
                Copyright <span>&copy;</span>MILSERV <br /> American Craft
                Deliveries, Corp 2020{" "}
              </p>

              {!isAuth() && (
                <Link href="/signin">
                  <p
                    className="footer-items staff-signin"
                    style={{
                      padding: 6,
                      borderRadius: 4,
                      backgroundColor: "#8d54b5",
                      color: "white",
                      display: "inline-block",
                      marginBottom: 6,
                    }}
                  >
                    Staff Portal
                  </p>
                </Link>
              )}

              <p className="footer-items">
                <a
                  href="http://juancode.com"
                  target="_blank"
                  style={{
                    marginBottom: 5,
                    color: "#8d54b5",
                    textDecoration: "none",
                  }}
                >
                  Site by juan
                  <FontAwesomeIcon icon={faGlobe} />
                  Code
                </a>
              </p>
            </div>
            <div className="col-md-2 pb-2 pr-0" id="footer-links">
              <h6 className="title">PARTNERS</h6>
              <p className="footer-items">
                <a href="/makers">MAKERS</a>
              </p>
              <p className="footer-items">
                <a href="/retailers">RETAILERS</a>
              </p>
              <p className="footer-items">
                <a href="/distributors">DISTRIBUTORS</a>
              </p>
            </div>
            <div className="col-md-2 pb-2 pr-0" id="footer-links">
              <h6 className="title">VETERANS</h6>
              <p className="footer-items">
                <a href="/veteran-jobs">JOBS</a>
              </p>
              <h6 className="title" href="/milserv-media">
                MILSERV MEDIA
              </h6>

              <p className="footer-items">
                {" "}
                <a href="/categories/blog">BLOG</a>{" "}
              </p>
              <p className="footer-items">
                {" "}
                <a href="/categories/press-release">PRESS RELEASES</a>{" "}
              </p>
              <p className="footer-items">
                <a href="/contact">CONTACT US</a>{" "}
              </p>
            </div>
            <div className="col-md-2 pb-2 pr-0" id="footer-links">
              <h6 className="title">LEGAL</h6>
              <p className="footer-items">
                <a href="/termsofuse" target="_blank">
                  TERMS OF USE
                </a>{" "}
              </p>
              <p className="footer-items">
                <a href="/privacy" target="_blank">
                  PRIVACY POLICY
                </a>{" "}
              </p>
              <br />
              <h6 className="title">STAY CONNECTED</h6>

              <SocialIcon url="https://www.instagram.com/milserv/" />
              <SocialIcon url="https://www.linkedin.com/company/american-craft-deliveries-milserve/" />
            </div>
            <div className="col-md-1 p-0 mt-3" id="footer-links">
              <a href="  https://www.hirevets.gov/" target="_blank">
                <img
                  width="70px"
                  style={{ borderRadius: "50%" }}
                  src={"../static/images/hirevets.jpg"}
                  alt="HIRE Vets Platinum Award logo"
                />
              </a>
            </div>
            <div className="col-md-1 p-0 mt-2" id="footer-links">
              <a
                href="https://dodskillbridge.usalearning.gov/index.htm"
                target="_blank"
              >
                <img
                  width="100px"
                  height="60px"
                  src={"../static/images/skillbridge.png"}
                  alt="Veteran Owned Business logo"
                />
              </a>
            </div>
            <div className="col-md-1 p-0 mt-2" id="footer-links">
              <img
                width="75px"
                src={"../static/images/vetownedbiz.png"}
                alt="Veteran Owned Business logo"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
