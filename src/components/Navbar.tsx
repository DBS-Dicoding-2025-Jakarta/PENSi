import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                <div className="text-green-400 text-2xl font-bold ml-4">PENSi</div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-800 hover:text-green-400">Beranda</a>
                    <a href="#" className="text-gray-800 hover:text-green-400">Tentang</a>
                    <a href="#" className="text-gray-800 hover:text-green-400">Layanan</a>
                    <a href="#" className="text-gray-800 hover:text-green-400">Blog</a>
                    <a href="#" className="text-gray-800 hover:text-green-400">Kontak</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;