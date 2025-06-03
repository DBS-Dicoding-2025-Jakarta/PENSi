"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const InformationCenter: React.FC = () => {
  return (
    <section id="blog" className="container mx-auto py-28 px-4 md:px-8">
      <header className="text-center mb-16">
        <p className="text-green-500 font-semibold mb-2 uppercase tracking-wide">
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-snug tracking-tight">
          Topik Penting seputar Dana Pensiun dan Perencanaan Keuangan
        </h1>
      </header>

      <main className="flex flex-col gap-10">
        {/* Featured Card */}
        <Link href="/blog/PERENCANAAN" passHref>
          <article className="flex flex-col md:flex-row bg-green-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group">
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <p className="text-green-600 uppercase text-sm font-semibold mb-2">
                Perencanaan
              </p>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-green-700 transition-colors">
                Mengapa Merencanakan Dana Pensiun Itu Penting?
              </h2>
              <p className="text-gray-600 mb-6">
                Banyak orang menunda perencanaan pensiun hingga terlambat.
                Pelajari alasan pentingnya merencanakan pensiun sejak dini.
              </p>
              <div className="flex items-center text-green-500 font-medium group-hover:underline">
                Read More
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/people/download(2).jpeg"
                alt="Profesional bisnis"
                width={700}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          </article>
        </Link>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              href: "/blog/BESTPRACTICES",
              category: "Best Practices",
              title: "Cara Menentukan Target Dana Pensiun Anda",
              image: "/people/download.jpeg",
              alt: "Konsultasi keuangan",
            },
            {
              href: "/blog/FONDASIKEUANGAN",
              category: "Fondasi Keuangan",
              title: "Perbedaan Tabungan dan Investasi untuk Dana Pensiun",
              image: "/people/images.jpeg",
              alt: "Gedung investasi",
            },
            {
              href: "/blog/GAYAHIDUPPENSIUN",
              category: "Gaya Hidup Pensiun",
              title:
                "Pensiun Nyaman di Indonesia - Apa yang Perlu Dipertimbangkan?",
              image: "/people/images(2).jpeg",
              alt: "Analisis keuangan",
            },
          ].map(({ href, category, title, image, alt }, idx) => (
            <Link key={idx} href={href} passHref>
              <article className="bg-green-50 rounded-lg shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition cursor-pointer">
                <div className="p-6 flex-grow">
                  <p className="text-green-600 uppercase text-xs font-medium mb-2">
                    {category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <div className="mt-auto">
                  <Image
                    src={image}
                    alt={alt}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
};

export default InformationCenter;
