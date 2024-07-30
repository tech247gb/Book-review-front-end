// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © 2024 Book Review Platform
        </div>
        <div className="space-x-4">
          <a href="/" className="text-sm hover:underline">Home</a>
          <a href="/about" className="text-sm hover:underline">About Us</a>
          <a href="/contact" className="text-sm hover:underline">Contact Us</a>
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
          <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
