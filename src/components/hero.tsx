import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LandingSection: React.FC = () => {
    return (
        <section className="flex h-screen w-full relative">

            {/* All Decoration */}
            <div className="absolute top-140 right-0 z-10">
                <Image
                    src="/vector/80.png"
                    alt="Top right decoration"
                    width={300}
                    height={300}
                />
            </div>
            {/* Bottom left vector */}
            <div className="absolute top-0 right-430 z-10">
                <Image
                    src="/vector/24.png" 
                    alt="Bottom left decoration"
                    width={200}
                    height={300}
                />
            </div>
            {/* Left side with illustration */}
            <div className="w-1/2 relative flex items-center justify-center p-12">
                <div className="relative w-full max-w-lg z-20">
                    <Image
                        src="/ilustration/Frame1.png"
                        alt="PENSi Illustration"
                        className="w-full h-auto"
                        width={800}
                        height={800}
                        priority
                    />
                </div>
                {/* Wavy pattern */}
                <div className="absolute top-20 left-200 z-10">
                    <Image
                        src="/vector/24px wavy.png"
                        alt="Wavy pattern"
                        width={180}
                        height={150}
                    />
                </div>
            </div>

            {/* aside content */}
            <div className="w-1/2 bg-[#053345] flex items-center relative">
                <div className="p-12 max-w-lg z-20">
                    <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                        Merencanakan Pensiun Lebih Mudah & Personal
                    </h1>
                    <p className="text-lg text-white mb-8">
                        PENSi adalah platform prediksi dana pensiun berbasis data, yang disesuaikan dengan gaya hidup,
                        kondisi finansial, dan tujuan pribadi Anda.
                    </p>
                    <button className="group bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors py-3 px-8 duration-300 flex items-center">
                        Mulai Estimasi Sekarang
                        <ArrowRight
                            size={20}
                            className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                    <div className="mt-10">
                        <span className="text-white text-sm">Registered and supervised by:</span>
                        <div className="flex items-center space-x-4 mt-3">
                            <Image src="/DBS.png" alt="DBS Logo" width={100} height={30} />
                            <Image src="/circle-g.png" alt="Secondary Logo" width={45} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingSection;