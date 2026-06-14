import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          MyLogo
        </h1>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 transition">
              Waitlist
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;