import React from "react";
import Image from "next/image";

const Subscription: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col">
      {/* Subscription Section */}
      <section className="bg-cyan-950 text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex-1">
            <p className="text-primary font-medium mb-4">Subscribe</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Stay informed never <br className="hidden md:block" />
              missed an update!
              <span className="block h-1 w-40 bg-primary mt-3"></span>
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-gray-300 mb-6 text-base">
              Once each month we&apos;ll send you recent episodes of our
              Financial information covering the optimization of digital
              technology and irresistible people delivering a great customer
              experience that impacts the bottom line.
            </p>
            <form className="mt-6">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-grow p-3 bg-transparent border-b border-gray-100 focus:outline-none text-white placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="mt-4 sm:mt-0 sm:ml-4 px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section
        id="kontak"
        className="bg-primary text-white py-12 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 mb-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">PENSi</h2>
              <p className="text-sm">Registered and supervised by:</p>
              <div className="flex items-center mt-3 space-x-3">
                <div className="relative w-28 h-10">
                  <Image
                    src="/vector/DBS.png"
                    alt="DBS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-8 h-8">
                  <Image
                    src="/vector/circle-g.png"
                    alt="Secondary Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {[...Array(3)].map((_, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 bg-white bg-opacity-20 rounded-md"
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src="/people/download(2).jpeg"
                        alt="Social"
                        fill
                        className="object-contain rounded-sm"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-white text-sm flex-1">
              <nav className="space-y-3">
                <a href="#" className="block hover:underline">
                  Home
                </a>
                <a href="#" className="block hover:underline">
                  Product
                </a>
                <a href="#" className="block hover:underline">
                  Industries
                </a>
                <a href="#" className="block hover:underline">
                  About
                </a>
                <a href="#" className="block hover:underline">
                  Blog
                </a>
              </nav>
              <nav className="space-y-3">
                <a href="#" className="block hover:underline">
                  FAQ
                </a>
                <a href="#" className="block hover:underline">
                  Community
                </a>
                <a href="#" className="block hover:underline">
                  Join the team
                </a>
                <a href="#" className="block hover:underline">
                  Legal Stuff
                </a>
                <a href="#" className="block hover:underline">
                  Terms of service
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-white border-t border-white border-opacity-30 text-center py-6">
        <p className="text-sm text-primary">
          © PENSi 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Subscription;
