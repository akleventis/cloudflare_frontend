import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
        <p className="backend"><a href='https://github.com/akleventis/cloudflare_frontend' target='_blank' rel='noreferrer'>Github Front-end (React)</a></p>
          <h2>Cloudflare Blog</h2>
          <p className="backend"> <a href='https://github.com/akleventis/cloudflare_backend' target='_blank' rel='noreferrer'>Github Back-end</a></p>
        </div>
      </header>
    );
  }
}

export default Header;
