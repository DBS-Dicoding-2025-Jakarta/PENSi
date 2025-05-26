import React from 'react';
import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const Blog: React.FC = () => {
    return (
        <section className="container mx-auto py-30 px-4 md:px-6">
            <header className="text-center mb-12">
                <p className="text-green-500 font-medium mb-2">Blog</p>
                <h1 className="text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
                    Topik Penting seputar Dana Pensiun dan Perencanaan Keuangan
                </h1>
            </header>

            <main className="flex flex-col gap-8">
                {/* Featured Card */}
                <Link href="/blog/featured">
                    <div className="flex flex-col md:flex-row bg-green-50 rounded-lg overflow-hidden cursor-pointer">
                        <div className="p-8 md:w-1/2">
                            <p className="text-green-600 uppercase font-medium text-sm mb-3">PERENCANAAN</p>
                            <h2 className="text-2xl font-bold mb-4">Mengapa Merencanakan Dana Pensiun Itu Penting?</h2>
                            <p className="text-gray-600 mb-4">
                                Banyak orang menunda perencanaan pensiun hingga terlambat.
                                Pelajari alasan pentingnya merencanakan pensiun sejak dini.
                            </p>
                            <button className="group text-green-500 font-medium rounded-md hover:bg-transparant transition-colors py-3 px-8 duration-300 flex items-center cursor-pointer">
                                Read More
                                <ArrowRight
                                    size={20}
                                    className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </div>
                        <div className="md:w-1/2 overflow-hidden">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <Link href="/blog/target-dana-pensiun">
                        <div className="bg-green-50 rounded-lg overflow-hidden flex flex-col h-full cursor-pointer">
                            <div className="p-6 flex-grow">
                                <p className="text-green-600 uppercase font-medium text-sm mb-3">BEST PRACTICES</p>
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
                    <Link href="/blog/tabungan-vs-investasi">
                        <div className="bg-green-50 rounded-lg overflow-hidden flex flex-col h-full cursor-pointer">
                            <div className="p-6 flex-grow">
                                <p className="text-green-600 uppercase font-medium text-sm mb-3">FONDASI KEUANGAN</p>
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
                    <Link href="/blog/pensiun-nyaman">
                        <div className="bg-green-50 rounded-lg overflow-hidden flex flex-col h-full cursor-pointer">
                            <div className="p-6 flex-grow">
                                <p className="text-green-600 uppercase font-medium text-sm mb-3">GAYA HIDUP PENSIUN</p>
                                <h3 className="text-xl font-bold">
                                    Pensiun Nyaman di Indonesia - Apa yang Perlu Dipertimbangkan?
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
        </section>
    );
};

export default Blog;