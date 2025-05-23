import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <div className="container text-center text-md-left">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">WAY BIGS</h5>
            <p>Premium die-cast collectibles and more!</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink className="text-white text-decoration-none" to="/">Home</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/product">Product</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/about">About</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Info & Social */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Connect with Us</h5>
            <p>Email: support@waybigs.com</p>
            <p>Phone: +91 98765 43210</p>
            <a
              href="https://www.instagram.com/dhinesh_4_6?igsh=emJmZnd2NDhpaHZv&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4 me-2"
            >
              <FaInstagram />
            </a>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-2 border-top border-light mt-3">
        &copy; {new Date().getFullYear()} WAY BIGS. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
