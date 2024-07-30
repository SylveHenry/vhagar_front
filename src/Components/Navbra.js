// Navbar.js
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState(
    "navbar navbar-expand-lg navbar-light bg-transparent"
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setNavbarClass(
          "navbar navbar-expand-lg navbar-light bg-scrolled shadow-sm"
        );
      } else {
        setNavbarClass("navbar navbar-expand-lg navbar-light bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navbarClass}>
      <div className="container-fluid p-2">
        <a className="navbar-brand text-light ps-2" href="#">
          <img
            src="../images/logo_with_word.png"
            alt=""
            style={{ width: "150px", height: "70px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list text-light"></i>
          {/* <span className="navbar-toggler-icon text-light"></span> */}
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tokenomics">
                TOKENOMICS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmap-container">
                ROADMAP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#network">
                COMMUNITY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                WHITEPAPER
              </a>
            </li>
          </ul>
          <form className=" ms-auto nav-item stake-button me-3 stake-small">
            <button className="btn " type="submit">
              STAKE STORM
            </button>
          </form>
        </div>
        <form className=" ms-auto nav-item stake-button me-3 stake-large">
          <button className="btn " type="submit">
            STAKE STORM
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
