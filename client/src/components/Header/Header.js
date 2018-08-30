import React from 'react';
import './Header.css';
import logo from "./logo-white.png";


const Header = (props) => (
  <nav className="navbar navbar-expand">
    <a className="navbar-brand" href="/"><img src={logo} alt="Designer Talent"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><a className="nav-link" href="/whoweare">Who We Are</a></li>
        <li className="nav-item"><a className="nav-link" href="/whatwedo">What We Do</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Sign in</a></li>  {/* Will go out to app.dt.com/signin*/}
        <li className="nav-item"><a className="nav-link" href="/">Sign Up</a></li> {/* Will go out to app.dt.com/signup*/}
      </ul>
    </div>
</nav>
)
export default Header;