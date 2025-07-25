import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-top mt-auto">
      <div className="container-fluid max-w-screen-xl p-4 py-5">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
          <div className="react-logo">
            <div className="react-logo-core"></div>
            <div className="react-logo-ring react-logo-ring-1"></div>
            <div className="react-logo-ring react-logo-ring-2"></div>
            <div className="react-logo-ring react-logo-ring-3"></div>
          </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 col-sm-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Resources</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link
                      to="/"
                      className="text-decoration-none text-secondary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-decoration-none text-secondary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Follow us</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a
                      href="https://github.com/sarvesh"
                      className="text-decoration-none text-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-decoration-none text-secondary"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-4 mb-4">
                <h5 className="text-uppercase fw-bold mb-3">Legal</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-decoration-none text-secondary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none text-secondary"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="text-muted">
              © 2025
              <a
                href="http://development-tricks.blogspot.in/"
                className="text-decoration-none ms-1"
              >
                sarvesh
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="#" className="text-muted me-3">
              <i className="bi bi-facebook"></i>
              <span className="visually-hidden">Facebook page</span>
            </Link>
            <Link to="#" className="text-muted me-3">
              <i className="bi bi-discord"></i>
              <span className="visually-hidden">Discord community</span>
            </Link>
            <Link to="#" className="text-muted me-3">
              <i className="bi bi-twitter"></i>
              <span className="visually-hidden">Twitter page</span>
            </Link>
            <Link to="#" className="text-muted me-3">
              <i className="bi bi-github"></i>
              <span className="visually-hidden">GitHub account</span>
            </Link>
            <Link to="#" className="text-muted">
              <i className="bi bi-dribbble"></i>
              <span className="visually-hidden">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
