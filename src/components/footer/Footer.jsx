import { FaDiscord, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br />
          <br />
          Powered By Irwin &#9426; {getYear}{" "}
        </div>
        <div className="socialIcons">
          <Link
            to="https://discord.gg/user/TsunamiTrophy#1088"
            style={{ textDecoration: "none", color: "white" }}>
            <span className="icon">
              <FaDiscord />
            </span>
          </Link>
          <Link
            to="https://www.instagram.com/bukanputratol/"
            style={{ textDecoration: "none", color: "white" }}>
            <span className="icon">
              <FaInstagram />
            </span>
          </Link>
          <Link
            to="https://github.com/irwinekabakti"
            style={{ textDecoration: "none", color: "white" }}>
            <span className="icon">
              <FaGithub />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/irwin-e-a69475247/"
            style={{ textDecoration: "none", color: "white" }}>
            <span className="icon">
              <FaLinkedin />
            </span>
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
