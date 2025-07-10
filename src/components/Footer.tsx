import React from 'react';
import { Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/chiran.jivi.399", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/chiranbaskota/", label: "Instagram" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Chiranbaskota", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/chiranjivi-baskota-9ba6352a4/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:baskotachiran48@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Chiranjivi Baskota
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Java developer passionate about building robust, scalable enterprise applications 
              and contributing to innovative software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                baskotachiran48@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                9865266056
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} Made</span>
              <span>by Chiranjivi Baskota</span>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <div className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;