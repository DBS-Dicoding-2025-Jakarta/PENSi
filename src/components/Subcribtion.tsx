import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className="mx-auto flex flex-col ">
            {/* Subscription Section */}
            <section className="bg-cyan-950 text-white py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="flex-1">
                        <p className="text-green-500 font-medium mb-4">Subscribe</p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Stay informed never <br className="hidden md:block" />
                            missed an update!
                            <span className="block h-1 w-40 bg-green-500 mt-2"></span>
                        </h1>
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-300 mb-6">
                            Once each month we&apos;ll send you recent episodes of our Financial information
                            covering the optimization of digital technology and irresistible people
                            delivering a great customer experience that impacts the bottom line.
                        </p>
                        <form className="mt-6">
                            <div className="flex flex-col sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-grow p-3 bg-transparent border-b border-gray-100 focus:outline-none text-white"
                                />
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-0 sm:ml-4 px-8 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
                                >
                                    Subsribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Main Footer */}
            <section className="bg-green-500 text-white py-8 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                        <div className="mb-8 md:mb-0">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold">PENSi</h2>
                                <p className="mt-3 text-sm">Registered and supervised by:</p>
                                <div className="flex items-center mt-2">
                                    <div className="relative w-28 mr-2">
                                        <Image
                                            src="/DBS.png"
                                            alt="DBS Logo"
                                            width={100}
                                            height={10}
                                            objectFit="contain"
                                            className="mr-2"
                                        />
                                    </div>
                                    <div className="relative w-8 h-8">
                                        <Image
                                            src="/circle-g.png"
                                            alt="Secondary Logo"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="p-2 bg-white bg-opacity-20 rounded-md">
                                    <div className="relative w-6 h-6">
                                        <Image
                                            src="/people/download(2).jpeg"
                                            alt="Instagram"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </a>
                                <a href="#" className="p-2 bg-white bg-opacity-20 rounded-md">
                                    <div className="relative w-6 h-6">
                                        <Image
                                            src="/people/download(2).jpeg"
                                            alt="Facebook"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </a>
                                <a href="#" className="p-2 bg-white bg-opacity-20 rounded-md">
                                    <div className="relative w-6 h-6">
                                        <Image
                                            src="/people/download(2).jpeg"
                                            alt="Phone"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-16 gap-y-8 text-cyan-900">
                            <div>
                                <nav className="space-y-4">
                                    <a href="#" className="block">Home</a>
                                    <a href="#" className="block">Product</a>
                                    <a href="#" className="block">Industries</a>
                                    <a href="#" className="block">About</a>
                                    <a href="#" className="block">Blog</a>
                                </nav>
                            </div>
                            <div>
                                <nav className="space-y-4">
                                    <a href="#" className="block">FAQ</a>
                                    <a href="#" className="block">Community</a>
                                    <a href="#" className="block">Join the team</a>
                                    <a href="#" className="block">Legal Stuff</a>
                                    <a href="#" className="block">Terms of service</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-cyan-900 border-opacity-20 text-center">
                        <p className="text-sm text-cyan-900">Copyright @PENSi 2025. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;