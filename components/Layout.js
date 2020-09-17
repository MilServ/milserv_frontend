import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { initGA, logPageView } from "../utils/analytics";

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
