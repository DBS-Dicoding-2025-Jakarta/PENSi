"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FAFAFA] shadow-md z-50 h-16 md:h-[80px]">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 h-full">
        <div className="text-primary text-xl md:text-3xl font-bold ml-4">
          PENSi
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 md:space-x-6 text-sm md:text-base">
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="/">Beranda</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="#tentang">Tentang</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="/layanan">Layanan</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="#kontak">Kontak</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-[#FAFAFA] flex flex-col space-y-4 py-4 px-6 shadow-md">
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="/" onClick={() => setIsOpen(false)}>Beranda</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="#tentang" onClick={() => setIsOpen(false)}>Tentang</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="/layanan" onClick={() => setIsOpen(false)}>Layanan</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
          <li className="text-gray-800 hover:text-primary hover:font-semibold">
            <Link href="#kontak" onClick={() => setIsOpen(false)}>Kontak</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
