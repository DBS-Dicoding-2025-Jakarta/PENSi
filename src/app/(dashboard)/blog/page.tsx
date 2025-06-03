import Image from "next/image";
import Link from "next/link";
import Subscription from "@/app/components/Subscription";

const blogPosts = [
  {
    id: "perencanaan",
    title: "Start Your Journey: Pensiun sejak Dini",
    summary: "Mengenal pentingnya mulai merencanakan pensiun dari usia muda.",
    category: "Perencanaan",
    imageUrl: "/images/pensiun-dini.jpg",
  },
  {
    id: "bestpractices",
    title: "Best Practices: Menyusun Dana Pensiun",
    summary:
      "Langkah-langkah strategis dalam menyusun dana pensiun yang realistis.",
    category: "Strategi",
    imageUrl: "/images/best-practices.jpg",
  },
  {
    id: "fondasikeuangan",
    title: "Investasi vs Tabungan",
    summary: "Perbedaan utama dan kapan harus memilih investasi atau tabungan.",
    category: "Fondasi Keuangan",
    imageUrl: "/images/investasi-vs-tabungan.jpg",
  },
  {
    id: "gayahiduppensiun",
    title: "Pensiun Bahagia dan Produktif",
    summary: "Mengisi masa pensiun dengan gaya hidup yang bermakna dan aktif.",
    category: "Gaya Hidup",
    imageUrl: "/images/gaya-hidup.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <main className="px-4 pt-28 pb-12 max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Topik Penting seputar Dana Pensiun dan Perencanaan Keuangan
        </h1>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-green-700 font-semibold mb-1">
                  {post.category}
                </p>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm">{post.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Subscription />
    </>
  );
}
