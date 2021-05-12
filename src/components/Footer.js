import React from "react";
import NavBar from "react-bootstrap/Navbar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
const Footer = () => (
  <div className="fixed-bottom">
    <NavBar variant="dark" bg="dark">
      <p className="mr-auto" id="footer-paragraph">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.infosys.com"> Infosys Limited</a>
      </p>
      <p className="ml-auto" id="footer-paragraph">
        Connect with us @ <LinkedInIcon></LinkedInIcon>{" "}
        <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
      </p>
    </NavBar>
  </div>
);
export default Footer;
