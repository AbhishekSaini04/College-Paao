import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GraduationCap size={32} className="text-primary-500" />
              <span className="text-xl font-bold text-white">College Paao</span>
            </Link>
            <p className="mb-4 text-gray-400 text-sm leading-relaxed">
              Guiding students to success with personalized college counseling
              services. Our expert advisors help you navigate the complex world
              of college admissions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@aksacts"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/haii_akshat"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/akshat-parashar-9982b4256/"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    document
                      .getElementById(`programs`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  to=""
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    document
                      .getElementById(`faq`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  to=""
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/batch/1"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  HSTES
                </Link>
              </li>
              <li>
                <Link
                  to="/batch/2"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  JoSaa
                </Link>
              </li>
              <li>
                <Link
                  to="/batch/3"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  JAC Delhi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-primary-500 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  Lorem, ipsum dolor.
                  <br />
                  Lorem, ipsum.
                  <br /> Lorem, ipsum dolor.
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="text-primary-500 mr-2 flex-shrink-0"
                />
                <a
                  href="tel:+11234567890"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  +1 12345678
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="text-primary-500 mr-2 flex-shrink-0"
                />
                <a
                  href="mailto:info@eduguide.com"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  temp@mail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} College Paao. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                target="_blank"
                href="https://instagram.com/abhishek.saini04"
                className="hover:text-primary-500 transition-colors"
              >
                With ❤️ by Abhishek Saini
              </a>
              {/* <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
