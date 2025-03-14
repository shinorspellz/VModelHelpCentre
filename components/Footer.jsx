import React from "react";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Help</h2>
            <ul className="list-none">
              <li className="mb-1">
                <a href="#">Help Center</a>
              </li>
              <li className="mb-1">
                <a href="#">Terms of Service</a>
              </li>
              <li className="mb-1">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-1">
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">For Businesses</h2>
            <ul className="list-none">
              <li className="mb-1">
                <a href="#">How VModel Works</a>
              </li>
              <li className="mb-1">
                <a href="#">Create an Ad</a>
              </li>
              <li className="mb-1">
                <a href="#">Advertise on VModel</a>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Community</h2>
            <ul className="list-none">
              <li className="mb-1">
                <a href="#">VModel for Business</a>
              </li>
              <li className="mb-1">
                <a href="#">VModel for Creators</a>
              </li>
              <li className="mb-1">
                <a href="#">VModel for Public Figures</a>
              </li>
              <li className="mb-1">
                <a href="#">VModel for Health & Wellness</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-gray-600">
          <p>&copy; 2025 Voltis Labs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
