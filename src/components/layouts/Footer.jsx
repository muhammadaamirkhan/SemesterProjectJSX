import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 border-t border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tagline */}
        <div className="text-center mb-6">
          <p className="text-lg font-semibold">© World Greatest Plant Ecommerce Store</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6">
          {/* Email */}
          <div>
            <p className="font-medium">📧 Email: 
              <a href="mailto:PlantStore@gmail.com" className="hover:text-yellow-300 ml-1 transition">
                PlantStore@gmail.com
              </a>
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="font-medium">📍 456 Elm Street, Springfield, IL 62704, Pakistan</p>
          </div>

          {/* Phone */}
          <div>
            <p className="font-medium">📞 Phone: 
              <a href="tel:+1234567890" className="hover:text-yellow-300 ml-1 transition">
                +123 456 7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
