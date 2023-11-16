// components/Footer.js
import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white p-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
