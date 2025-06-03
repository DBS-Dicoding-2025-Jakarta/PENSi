import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LandingSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row sm:mt-20 lg:min-h-screen w-full static overflow-hidden">
      {/* Dekorasi Desktop */}
      <Image
        src="/vector/80.png"
        alt="Top right decoration"
        width={200}
        height={200}
        className="hidden xl:block absolute -bottom-48 right-0 z-10"
        loading="lazy"
      />
      <Image
        src="/vector/24.png"
        alt="Top decoration"
        width={50}
        height={50}
        className="hidden xl:block absolute bottom-0 left-0 z-10"
        loading="lazy"
      />

      {/* Dekorasi Tablet */}
      <Image
        src="/vector/80.png"
        alt="Top right decoration"
        width={180}
        height={180}
        className="hidden lg:block xl:hidden absolute top-20 right-4 z-10"
        loading="lazy"
      />
      <Image
        src="/vector/24.png"
        alt="Top decoration"
        width={120}
        height={180}
        className="hidden lg:block xl:hidden absolute top-0 right-40 z-10"
        loading="lazy"
      />

      {/* Ilustrasi Kiri (Desktop) */}
      <div className="hidden bg-slate-50 lg:flex w-1/2 items-center justify-center p-8 lg:p-12 relative">
        <div className="relative w-full max-w-md lg:max-w-lg z-20">
          <Image
            src="/ilustration/Frame1.png"
            alt="PENSi Illustration"
            className="w-full h-auto"
            width={800}
            height={800}
            priority
          />
        </div>

        {/* Dekorasi Wavy */}
        <Image
          src="/vector/24px wavy.png"
          alt="Wavy pattern"
          width={180}
          height={150}
          className="hidden xl:block absolute top-20 left-48 z-10"
          loading="lazy"
        />
        <Image
          src="/vector/24px wavy.png"
          alt="Wavy pattern"
          width={120}
          height={100}
          className="hidden lg:block xl:hidden absolute top-16 left-32 z-10"
          loading="lazy"
        />
      </div>

      {/* Konten Kanan */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex items-center justify-center relative lg:min-h-screen">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 w-full max-w-4xl gap-6 sm:gap-8">
          {/* Teks */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Merencanakan Pensiun Lebih Mudah & Personal
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">
              PENSi adalah platform prediksi dana pensiun berbasis data, yang
              disesuaikan dengan gaya hidup, kondisi finansial, dan tujuan
              pribadi Anda.
            </p>
            <Link href="/layanan" passHref>
              <div className="group bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors py-3 px-6 duration-300 flex items-center cursor-pointer w-fit text-sm mx-auto sm:mx-0">
                Mulai Estimasi Sekarang
                <ArrowRight
                  size={18}
                  className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
            <div className="mt-6">
              <span className="text-white text-xs">
                Registered and supervised by:
              </span>
              <div className="flex items-center space-x-3 mt-2 justify-center sm:justify-start">
                <Image
                  src="/vector/DBS.png"
                  alt="DBS Logo"
                  width={70}
                  height={21}
                  loading="lazy"
                />
                <Image
                  src="/vector/circle-g.png"
                  alt="Circle G Logo"
                  width={32}
                  height={21}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Ilustrasi */}
          <div className="flex-shrink-0 w-48 sm:w-64 md:w-80">
            <Image
              src="/ilustration/Frame1.png"
              alt="PENSi Illustration"
              className="w-full h-auto"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block p-10 max-w-full lg:max-w-lg z-20 w-full ">
          <h1 className="text-5xl xl:text-5xl font-bold text-black mb-6 leading-tight">
            Merencanakan Pensiun Lebih Mudah & Personal
          </h1>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            PENSi adalah platform prediksi dana pensiun berbasis data, yang
            disesuaikan dengan gaya hidup, kondisi finansial, dan tujuan pribadi
            Anda.
          </p>
          <Link href="/layanan" passHref>
            <div className="group bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors py-3 px-8 duration-300 flex items-center cursor-pointer w-fit text-base">
              Mulai Estimasi Sekarang
              <ArrowRight
                size={20}
                className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
          <div className="mt-10">
            <span className="text-white text-sm">
              Registered and supervised by:
            </span>
            <div className="flex items-center space-x-4 mt-3">
              <Image
                src="/vector/DBS.png"
                alt="DBS Logo"
                width={100}
                height={30}
                loading="lazy"
              />
              <Image
                src="/vector/circle-g.png"
                alt="Circle G Logo"
                width={45}
                height={30}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
