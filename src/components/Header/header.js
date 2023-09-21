import { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <p className="website-logo">BK</p>
          <ul className="nav-menu">
            <li>
              <img
                className="social-network-img"
                src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
                alt="Linked In"
              />
            </li>
            <li>
              <img
                className="social-network-img"
                src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
                alt="Git Hub"
              />
            </li>
            <li>
              <img
                className="social-network-img"
                src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
                alt="Twitter"
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
