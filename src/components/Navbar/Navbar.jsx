// src/components/Navbar.jsx
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="w-10">
          <img src={Logo} alt="" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-pink-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Produk
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Kontak
            </a>
          </li>
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-500 transition"
          >
            Belanja Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-pink-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">
            Produk
          </a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">
            Tentang Kami
          </a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">
            Kontak
          </a>
          <a
            href="#"
            className="inline-block mt-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
          >
            Belanja Sekarang
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
