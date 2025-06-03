import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LandingSection: React.FC = () => {
  return (
    <section className="pt-20 sm:pt-0 bg-[#F5F7FA] flex flex-col lg:flex-row w-full relative">
      {/* Dekorasi untuk layar besar */}
      <div className="hidden xl:block absolute top-150 right-0 z-10">
        <Image
          src="/vector/80.png"
          alt="Top right decoration"
          width={150}
          height={150}
        />
      </div>
      <div className="hidden xl:block absolute top-100 right-0 z-10">
        <Image
          src="/vector/62.png"
          alt="Top decoration"
          width={50}
          height={300}
        />
      </div>
      <div className="hidden lg:block xl:hidden absolute top-150 right-0 z-10">
        <Image
          src="/vector/80.png"
          alt="Top right decoration"
          width={180}
          height={150}
        />
      </div>
      <div className="hidden lg:block xl:hidden absolute top-100 right-0 z-10">
        <Image
          src="/vector/62.png"
          alt="Top right decoration"
          width={50}
          height={150}
        />
      </div>
      <div className="hidden lg:block xl:hidden absolute top-140 left-0 z-10">
        <Image
          src="/vector/24.png"
          alt="Top left decoration"
          width={50}
          height={180}
        />
      </div>

      {/* Ilustrasi Kiri (hanya untuk desktop) */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center px-8 lg:px-12">
        <div className="relative w-full max-w-md lg:max-w-lg z-20">
          <Image
            src="/ilustration/Frame1.png"
            alt="PENSi Illustration"
            className="w-full h-auto"
            width={540}
            height={450}
            priority
          />
        </div>
        <div className="hidden xl:block absolute top-120 left-0 z-10">
          <Image
            src="/vector/24.png"
            alt="left pattern"
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* Konten utama */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative lg:min-h-screen">
        {/* Mobile & Tablet layout (vertikal) */}
        <div className="lg:hidden flex flex-col items-start text-left px-8 w-full max-w-2xl mx-auto gap-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-3xl font-bold text-black mb-3 leading-snug">
              Merencanakan Pensiun <br className="sm:hidden" /> Lebih Mudah &
              Personal
            </h1>

            <div className="w-60 sm:w-72 md:w-80 mt-4">
              <Image
                src="/ilustration/Frame1.png"
                alt="PENSi Illustration"
                className="w-full h-auto"
                width={800}
                height={800}
                priority
              />
            </div>
            <p className="text-sm sm:text-base text-[#808080] mb-6 pr-32 leading-relaxed">
              PENSi adalah platform prediksi dana pensiun berbasis data, yang
              disesuaikan dengan gaya hidup, kondisi finansial, dan tujuan
              pribadi Anda.
            </p>
          </div>

          <Link href="/layanan" passHref>
            <div className="group bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors py-3 px-6 duration-300 flex items-center cursor-pointer text-sm">
              Mulai Estimasi Sekarang
              <ArrowRight
                size={18}
                className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>

          <div className="mt-6">
            <span className="text-[#666] text-xs block">
              Registered and supervised by:
            </span>
            <div className="flex items-center space-x-3 mt-2 justify-center">
              <Image
                src="/vector/DBS.png"
                alt="DBS Logo"
                width={70}
                height={21}
              />
              <Image
                src="/vector/circle-g.png"
                alt="Secondary Logo"
                width={32}
                height={21}
              />
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block max-w-full lg:max-w-xl w-full">
          <h1 className="text-5xl xl:text-[50px] font-bold text-black mb-6 leading-tight">
            Merencanakan Pensiun Lebih Mudah & Personal
          </h1>
          <p className="text-base text-[#808080] mb-8 leading-relaxed">
            PENSi adalah platform prediksi dana pensiun berbasis data, yang
            disesuaikan dengan gaya hidup, kondisi finansial, dan tujuan pribadi
            Anda.
          </p>
          <Link href="/layanan" passHref>
            <div className="group bg-primary text-white font-medium rounded-md hover:bg-green-700 transition-colors py-3 px-8 duration-300 flex items-center cursor-pointer w-fit text-base">
              Mulai Estimasi Sekarang
              <ArrowRight
                size={20}
                className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
          <div className="mt-10">
            <span className="text-black text-sm">
              Registered and supervised by:
            </span>
            <div className="flex items-center space-x-4 mt-3">
              <Image
                src="/vector/DBS.png"
                alt="DBS Logo"
                width={100}
                height={30}
              />
              <Image
                src="/vector/circle-g.png"
                alt="Secondary Logo"
                width={45}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
