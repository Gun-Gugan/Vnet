import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
       
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          {/* <img src={logo} alt="V Net Technologies Logo" className="h-10 mb-4" /> */}
          <p className="text-sm text-gray-300 max-w-xs">
            We specialize in web development, UI/UX, cloud services, and security systems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start md:col-span-2">
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center justify-center md:justify-start text-gray-300">
              <FaMapMarkerAlt className="mr-2 text-blue-400" />
              <a
                href="https://www.google.com/maps/dir//Vnet+Technologies,+Check+Post,+137+D,+1st+Floor,+Vel+Valagam,+Sathy+Rd,+opposite+Kalapatti+Pirivu,+Saravanampatti,+Coimbatore,+Tamil+Nadu+641035"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                137 D, 1st Floor, Velvalagam, Saravanampatti, Coimbatore
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start text-gray-300">
              <FaPhone className="mr-2 text-blue-400" />
              <a href="tel:++918787878787" className="hover:underline">
                +91-8787878787
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start text-gray-300">
              <FaEnvelope className="mr-2 text-blue-400" />
              <a href="mailto:vnettechnologiestest@gmail.com" className="hover:underline">
                vnettechnologiestest@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} V Net Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;