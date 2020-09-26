import { useState } from "react";
import Link from "next/link";
// import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import ".././node_modules/nprogress/nprogress.css";
import Search from "../components/blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <div style={{ paddingBottom: "80px" }}>
        <Navbar color="light" light expand="md" className="navbar" fixed="top">
          <Link
            href="/"
            // className="font-weight-bold pt-1 pb-0"
          >
            <NavbarBrand
              className="navBarLogo font-weight-bold pt-1 pb-0"
              style={{ paddingLeft: 7, marginRight: "25px" }}
            >
              <img
                //Try makeStyle classes to ref image within file
                src="../static/images/owllogo.jpg"
                width="45px"
                height="40px"
                alt="React Bootstrap logo"
                style={{ paddingRight: 0, borderRadius: 10 }}
              />
              MILSERV
              <span className="bottom-logo-text">
                An American Craft Deliveries Company
              </span>
            </NavbarBrand>
          </Link>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="navtoggler">
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  className="listItems dropdowns-arrows"
                >
                  PARTNERS
                </DropdownToggle>
                <DropdownMenu right>
                  {/* <DropdownItem>MAKERS</DropdownItem> */}
                  <Link href="/retailers">
                    <DropdownItem>RETAILERS</DropdownItem>
                  </Link>
                  <Link href="/makers">
                    <DropdownItem>MAKERS</DropdownItem>
                  </Link>
                  <Link href="/distributors">
                    <DropdownItem>DISTRIBUTORS</DropdownItem>
                  </Link>
                  {/* <DropdownItem divider />
                <Link href="/index#partner">
                  <DropdownItem>PARTNER WITH US</DropdownItem>
                </Link> */}
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  className="listItems dropdowns-arrows"
                >
                  VETERANS
                </DropdownToggle>
                <DropdownMenu right>
                  <Link href="/veteran-jobs">
                    <DropdownItem>JOBS</DropdownItem>
                  </Link>
                  {/* <DropdownItem>SKILLBRIDGE</DropdownItem> */}
                  {/* <DropdownItem>GIVING BACK</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  className="listItems dropdowns-arrows"
                >
                  MILSERV MEDIA
                </DropdownToggle>
                <DropdownMenu right>
                  <Link href="/categories/blog">
                    <DropdownItem>BLOG</DropdownItem>
                  </Link>
                  <Link href="/categories/press-release">
                    <DropdownItem>PRESS RELEASES</DropdownItem>
                  </Link>
                  <Link href="/milserv-media">
                    <DropdownItem>ALL CATEGORIES</DropdownItem>
                  </Link>

                  {/* <DropdownItem>STAY CONNECTED</DropdownItem> */}
                  {/* <DropdownItem divider />
                <DropdownItem>Partner with us</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <Link href="/contact">
                <a>
                  <NavItem className="listItems">CONTACT</NavItem>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <NavItem className="listItems">ABOUT</NavItem>
                </a>
              </Link>

              {isAuth() && isAuth().role === 0 && (
                <Link href="/user">
                  <NavItem className="listItems">
                    {" "}
                    {`${isAuth().name}'s Portal`}
                  </NavItem>
                </Link>
              )}

              {isAuth() && isAuth().role === 1 && (
                <Link href="/admin">
                  <NavItem className="listItems">
                    <FontAwesomeIcon icon={faLaptopCode} />{" "}
                    {`${isAuth().name}'s Portal`}
                  </NavItem>
                </Link>
              )}

              {isAuth() && (
                <NavItem>
                  <NavLink
                    className="signout"
                    onClick={() => signout(() => Router.replace("/signin"))}
                  >
                    <FontAwesomeIcon icon={faDoorOpen} /> Signout
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
          <Nav
            className="ml-0"
            style={{
              marginLeft: 0,
              width: "400px",
              marginTop: ".78rem",
              backgroundColor: "white",
            }}
            navbar
          >
            <Search style={{ backgroundColor: "white" }} />
          </Nav>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default Header;
