"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-green-400 text-2xl font-bold ml-4">PENSi</div>
        <ul className="flex space-x-6">
          <li className="text-gray-800 hover:text-green-400">
            <Link href="/">Beranda</Link>
          </li>
          <li className="text-gray-800 hover:text-green-400">
            <Link href="#tentang">Tentang</Link>
          </li>
          <li className="text-gray-800 hover:text-green-400">
            <Link href="/layanan">Layanan</Link>
          </li>
          <li className="text-gray-800 hover:text-green-400">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-gray-800 hover:text-green-400">
            <Link href="#kontak">Kontak</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
