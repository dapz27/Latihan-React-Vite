import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md py-4 transition-all">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">Gymnos</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="font-medium text-gray-700 hover:text-black transition">Home</a>
          </li>
          <li>
            <a href="#" className="font-medium text-gray-700 hover:text-black transition">About</a>
          </li>
          <li>
            <a href="#" className="font-medium text-gray-700 hover:text-black transition">Service</a>
          </li>
          <li>
            <a href="#" className="font-medium text-gray-700 hover:text-black transition">Project</a>
          </li>
        </ul>

        {/* Social Media + Burger Menu */}
        <div className="flex items-center">
          {/* Tombol Social Media */}
          <a
            href="#"
            className="bg-red-500 px-4 py-2 rounded-lg text-white font-bold hover:bg-red-600 transition-all mr-4"
          >
            Social Media
          </a>

          {/* Burger Menu untuk Mobile */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full text-center">
          <li className="py-3 border-b">
            <a href="#" className="text-gray-700 hover:text-black transition">Home</a>
          </li>
          <li className="py-3 border-b">
            <a href="#" className="text-gray-700 hover:text-black transition">About</a>
          </li>
          <li className="py-3 border-b">
            <a href="#" className="text-gray-700 hover:text-black transition">Service</a>
          </li>
          <li className="py-3 border-b">
            <a href="#" className="text-gray-700 hover:text-black transition">Project</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
