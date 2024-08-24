import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  function handleActiveLink(link) {
    setActiveLink(link);
  }

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 400) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top text-white py-2 shadow-thin ${
        isScrolled ? "white-bg" : "white-bg"
      }`}
      data-bs-theme="light"
    >
      <div className="container">
        <a
          className="navbar-brand fw-semibold text-uppercase d-flex align-items-center"
          href="/"
        >
          <img
            width={30}
            height={30}
            src="public/images/USTP Logo against Light Background.png"
            className=" me-2"
            alt=""
          />
          sabuag
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mb-4 mb-lg-0 mt-3 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="d-flex align-items-center nav-item ">
              <Link
                className={`px-3 fw-semibold nav-link ${
                  activeLink === "Home" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
                onClick={() => handleActiveLink("Home")}
              >
                HOME
              </Link>
            </li>
            <li className="d-flex align-items-center nav-item">
              <Link
                className={`px-3 fw-semibold nav-link ${
                  activeLink === "about" ? "active" : ""
                }`}
                aria-current="page"
                to="/about"
                onClick={() => handleActiveLink("about")}
              >
                ABOUT US
              </Link>
            </li>
            <li className="d-flex align-items-center nav-item">
              <a
                className={`px-3 fw-semibold nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                href="#movielist-section"
                onClick={() => handleActiveLink("contact")}
              >
                CONTACTS
              </a>
            </li>
            <li className="d-flex align-items-center nav-item">
              <Link className="px-3 nav-link">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-user"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                  </svg>
                </i>
              </Link>
            </li>
            <li className="d-flex align-items-center nav-item">
              <Link className="px-3 nav-link">
                <button className="btn btn-warning fw-semibold">Sign In</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
