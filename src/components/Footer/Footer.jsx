import React from "react";

import "./Footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import facebook from "../../Assets/img/facebook.png";
import insta from "../../Assets/img/instagram.png";
import youtube from "../../Assets/img/youtube.png";
import linkedin from "../../Assets/img/linkedin.png";
import logo from "../../Assets/img/logo.png";
import line from "../../Assets/img/line.png";

function Footer() {
  return (
    <footer>
      <div className="container m-auto p-0">
        <div className="row m-0">
          <div className="col-12 col-lg-10  mx-auto p-0 mt-1">
            <div className="row mb-3">
              <div className="col-6 col-lg-6 my-auto d-flex justify-content-start ">
                <div className="col-12 col-lg-9">
                  <div className="row">
                    <div className="col-5 col-lg-4 p-0 m-auto ">
                      <img src={logo} className="logo m-0" alt="" />
                    </div>
                    <div className="col-1 col-lg-1 p-0  mx-auto my-auto">
                      <img src={line} className="line m-0" alt="" />
                    </div>
                    <div className="col-6 col-lg-7 p-0 mx-auto my-auto">
                      <h4 className="logo-heading m-0">IIT Roorkee</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-6 d-flex justify-content-end align-items-center">
                <div className="footer-tagline">
                  <p className="m-0">Empowering Innovation, Enlightening Minds</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col-6 col-lg-4 mb-2 ">
                <h5 className="mb-2">Our Address</h5>
                <p className="mb-0">Department Of Electrical Engineering</p>
                <p className="mb-1">IIT Roorkee, 247667</p>
                <p className="mb-1">Phone: xxxx-xxxx-xxxx</p>
                <p className="mb-1">
                  Email: <a href="mailto:eess@iitr.ac.in">eess@iitr.ac.in</a>
                </p>
              </div>

              <div
                className="col-6 col-lg-4 mb-2 text-center"
                style={{ width: "fit-content" }}
              >
                <h5 className="mb-2">Quick Links</h5>
                <ul className="text-start">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://iitr.ac.in/"
                    >
                      IITR Home
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://iitr.ac.in/Departments/Electrical%20Engineering%20Department/Home.html"
                    >
                      EED
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://acad.iitr.ac.in/"
                    >
                      Acads
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-lg-4 mb-2 text-center">
                <h5 className="mb-2">Follow Us</h5>
                <div className="col-lg-6 mx-auto">
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.facebook.com/eess.iitr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className="social-links " src={facebook} alt="" />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/eess.iitr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className="social-links " src={insta} alt="" />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.youtube.com/channel/UC9ZDP8Tj1kEzDcCnML1JIUA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className="social-links " src={youtube} alt="" />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.linkedin.com/company/electrical-engineering-students-society-iit-roorkee/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className="social-links " src={linkedin} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-0" />

              <div className="mt-0">
                <p className="copyright-text text-center w-100">
                  &copy; Copyright 2022, Electrical Engineering Students'
                  Society, IIT Roorkee. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
