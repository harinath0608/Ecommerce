import React from "react"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo and Links */}
        <div className="flex items-center space-x-6">
          <span className="text-xl font-bold">Logo</span>
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Right side - Search box and Auth buttons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
          <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Login</button>
        </div>
      </div>
    </nav>
  );
}
