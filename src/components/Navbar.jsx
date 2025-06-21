import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-info container-fluid justify-content-center fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand col-6" to="/">
          <img
            src="https://t3.ftcdn.net/jpg/02/06/39/48/240_F_206394898_cq1zC6oqgsuKB47y9r74JFbRu1jbmhbE.jpg"
            alt="Logo"
            className="img-fluid rounded-circle"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded={toggle ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item col-8">
              <Link className="nav-link active" aria-current="page" to="/">
               <Link to="/" className="nav-link text-dark" onClick={handleToggle}>Home</Link>
              </Link>
            </li>
            <li className="nav-item col-8">
              <Link className="nav-link" to="/about">
               <Link to="/About" className="nav-link text-dark" onClick={handleToggle}>About</Link>
              </Link>
            </li>
            <li className="nav-item dropdown col-8">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/contact">
                   <Link to="/contacts" className="nav-link text-dark" onClick={handleToggle}>Contact</Link>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/help">
                    <Link to="/help" className="nav-link text-dark" onClick={handleToggle}>Help</Link>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
