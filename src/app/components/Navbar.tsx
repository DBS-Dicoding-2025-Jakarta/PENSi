"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/#kontak" },
];

const NavLinkList = ({ onClick }: { onClick?: () => void }) => (
  <>
    {navLinks.map(({ label, href }) => (
      <li
        key={label}
        className="text-gray-800 hover:text-primary hover:font-semibold"
      >
        <Link href={href} onClick={onClick}>
          {label}
        </Link>
      </li>
    ))}
  </>
);

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
          <NavLinkList />
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-[#FAFAFA] flex flex-col space-y-4 py-4 px-6 shadow-md">
          <NavLinkList onClick={() => setIsOpen(false)} />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
