import React from "react";
import KalkulatorForm from "./Kalkulator-form";

const KalkulatorSection = () => {
  return (
    <section className="bg-gray-50 py-16 flex-grow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Kalkulator Pensiun
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Jaminan keisejahteraan hari tua; merupakkan harapan semua orang.{" "}
          <br />
          Ayo hitung investasi masa depan mu, dengan Kalkulator Pensiun
        </p>
        <KalkulatorForm />
      </div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-green-200 rounded-r-full -z-10 opacity-50"></div>
      <div className="absolute top-1/2 right-0 w-1/4 h-1/2 bg-green-200 rounded-l-full -z-10 opacity-50 transform translate-y-1/2"></div>
    </section>
  );
};

export default KalkulatorSection;
