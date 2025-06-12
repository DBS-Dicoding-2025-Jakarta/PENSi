import Image from "next/image";
import { notFound } from "next/navigation";
import Subscription from "@/app/components/Subscription";
import { any } from "@tensorflow/tfjs";

// Simulasi data detail blog
const InformationCenter = [
  {
    id: "PERENCANAAN",
    title:
      "Cara Mempersiapkan Keuangan Pensiun dengan Teknologi AI dan Otomatisasi",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Di era digital, teknologi seperti AI dan otomatisasi keuangan memberikan kemudahan dalam merencanakan masa pensiun. Aplikasi berbasis AI mampu memantau pengeluaran, memberi saran investasi, hingga membuat proyeksi keuangan jangka panjang secara akurat.

      Pengguna cukup memasukkan penghasilan dan pengeluaran bulanan, dan sistem akan secara otomatis menyarankan besaran dana pensiun yang perlu disiapkan. Ini sangat membantu bagi mereka yang tidak memiliki latar belakang keuangan.

      Teknologi kini menjadi sahabat terbaik dalam membangun masa depan finansial yang aman dan nyaman.
    `,
    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blogw4.png",
    imageContent: "/people/blogw5.jpg",
  },

  {
    id: "BESTPRACTICES",
    title:
      "Cara Mempersiapkan Keuangan Pensiun dengan Teknologi AI dan Otomatisasi",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Di era digital, teknologi seperti AI dan otomatisasi keuangan memberikan kemudahan dalam merencanakan masa pensiun. Aplikasi berbasis AI mampu memantau pengeluaran, memberi saran investasi, hingga membuat proyeksi keuangan jangka panjang secara akurat.

      Pengguna cukup memasukkan penghasilan dan pengeluaran bulanan, dan sistem akan secara otomatis menyarankan besaran dana pensiun yang perlu disiapkan. Ini sangat membantu bagi mereka yang tidak memiliki latar belakang keuangan.

      Teknologi kini menjadi sahabat terbaik dalam membangun masa depan finansial yang aman dan nyaman.
    `,
    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blogw4.png",
    imageContent: "/people/blogw5.jpg",
  },

  {
    id: "FONDASIKEUANGAN",
    title:
      "Cara Mempersiapkan Keuangan Pensiun dengan Teknologi AI dan Otomatisasi",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Di era digital, teknologi seperti AI dan otomatisasi keuangan memberikan kemudahan dalam merencanakan masa pensiun. Aplikasi berbasis AI mampu memantau pengeluaran, memberi saran investasi, hingga membuat proyeksi keuangan jangka panjang secara akurat.

      Pengguna cukup memasukkan penghasilan dan pengeluaran bulanan, dan sistem akan secara otomatis menyarankan besaran dana pensiun yang perlu disiapkan. Ini sangat membantu bagi mereka yang tidak memiliki latar belakang keuangan.

      Teknologi kini menjadi sahabat terbaik dalam membangun masa depan finansial yang aman dan nyaman.
    `,
    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blogw4.png",
    imageContent: "/people/blogw5.jpg",
  },

  {
    id: "GAYAHIDUPPENSIUN",
    title:
      "Cara Mempersiapkan Keuangan Pensiun dengan Teknologi AI dan Otomatisasi",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Di era digital, teknologi seperti AI dan otomatisasi keuangan memberikan kemudahan dalam merencanakan masa pensiun. Aplikasi berbasis AI mampu memantau pengeluaran, memberi saran investasi, hingga membuat proyeksi keuangan jangka panjang secara akurat.

      Pengguna cukup memasukkan penghasilan dan pengeluaran bulanan, dan sistem akan secara otomatis menyarankan besaran dana pensiun yang perlu disiapkan. Ini sangat membantu bagi mereka yang tidak memiliki latar belakang keuangan.

      Teknologi kini menjadi sahabat terbaik dalam membangun masa depan finansial yang aman dan nyaman.
    `,
    quote: "Masa depan keuangan Anda dimulai hari ini, bukan besok.",
    imageHeader: "/people/blogw4.png",
    imageContent: "/people/blogw5.jpg",
  },
];

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = InformationCenter.find((item) => item.id === params.id);

  if (!post) return notFound();

  const paragraphs = post.content
    .trim()
    .split("\n")
    .filter((p) => p.trim().length > 0);

  return (
    <>
      <main className="max-w-3xl mx-auto px-4 pt-28 pb-20 text-gray-800">
        <p className="text-sm text-gray-500 mb-2">Artikel</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug text-gray-900">
          {post.title}
        </h1>

        <div className="text-sm text-gray-500 mb-6">
          <span>{post.date}</span> · <span>by {post.author}</span>
        </div>

        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageHeader}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {paragraphs.map((para, idx) => (
          <p key={idx} className="mb-6 text-lg leading-relaxed">
            {para}
          </p>
        ))}

        <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700 mb-6 text-base">
          “{post.quote}”
        </blockquote>

        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageContent}
            alt={post.id}
            fill
            className="object-cover"
          />
        </div>
      </main>

      <Subscription />
    </>
  );
}
