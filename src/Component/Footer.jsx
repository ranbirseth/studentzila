import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-8">
      <div className="container mx-auto flex flex-col  md:flex-row justify-between items-center">

        <div className="mb-4 md:mb-0">

          <ul className="flex space-x-4">
            <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
            <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
            <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
