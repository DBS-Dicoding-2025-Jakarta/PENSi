"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const InformationCenter: React.FC = () => {
  return (
    <section id="blog" className="w-full py-30 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Blog</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
            Topik Penting seputar Dana Pensiun dan Perencanaan Keuangan
          </h1>
        </header>

        <main className="flex flex-col gap-8">
          {/* Featured Card */}
          <Link href="/blog/PERENCANAAN">
            <div className="flex flex-col lg:flex-row bg-primary/10 rounded-lg overflow-hidden cursor-pointer">
              <div className="p-8 lg:w-1/2">
                <p className="text-primary uppercase font-medium text-sm mb-3">
                  PERENCANAAN
                </p>
                <h2 className="text-2xl font-bold mb-4">
                  Mengapa Merencanakan Dana Pensiun Itu Penting?
                </h2>
                <p className="text-gray-600 mb-4">
                  Banyak orang menunda perencanaan pensiun hingga terlambat.
                  Pelajari alasan pentingnya merencanakan pensiun sejak dini.
                </p>
                <button className="group text-primary font-medium rounded-md hover:bg-transparant transition-colors py-3 duration-300 flex items-center cursor-pointer">
                  Read More
                  <ArrowRight
                    size={20}
                    className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
              <div className="lg:w-1/2 overflow-hidden">
                <Image
                  src="/people/download(2).jpeg"
                  alt="Profesional bisnis"
                  width={700}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </Link>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Link href="/blog/BESTPRACTICES">
              <div className="bg-primary/10 rounded-lg overflow-hidden flex flex-col h-full cursor-pointer">
                <div className="p-6 flex-grow">
                  <p className="text-primary uppercase font-medium text-sm mb-3">
                    BEST PRACTICES
                  </p>
                  <h3 className="text-xl font-bold">
                    Cara Menentukan Target Dana Pensiun Anda
                  </h3>
                </div>
                <div className="mt-auto">
                  <Image
                    src="/people/download(2).jpeg"
                    alt="Konsultasi keuangan"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/blog/FONDASIKEUANGAN">
              <div className="bg-primary/10 rounded-lg overflow-hidden flex flex-col h-full cursor-pointer">
                <div className="p-6 flex-grow">
                  <p className="text-primary uppercase font-medium text-sm mb-3">
                    FONDASI KEUANGAN
                  </p>
                  <h3 className="text-xl font-bold">
                    Perbedaan Tabungan dan Investasi untuk Dana Pensiun
                  </h3>
                </div>
                <div className="mt-auto">
                  <Image
                    src="/people/download(2).jpeg"
                    alt="Gedung investasi"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/blog/GAYAHIDUPPENSIUN">
              <div className="bg-primary/10 rounded-lg overflow-hidden flex flex-col h-full cursor-pointer">
                <div className="p-6 flex-grow">
                  <p className="text-primary uppercase font-medium text-sm mb-3">
                    GAYA HIDUP PENSIUN
                  </p>
                  <h3 className="text-xl font-bold">
                    Pensiun Nyaman di Indonesia - Apa yang Perlu
                    Dipertimbangkan?
                  </h3>
                </div>
                <div className="mt-auto">
                  <Image
                    src="/people/download(2).jpeg"
                    alt="Analisis keuangan"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
};

export default InformationCenter;
