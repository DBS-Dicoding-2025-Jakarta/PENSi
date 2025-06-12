import Image from "next/image";
import { notFound } from "next/navigation";
import Subscription from "@/app/components/Subscription";

// Simulasi data detail blog
const blogPosts = [
  {
    id: "perencanaan",
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
    id: "bestpractices",
    title: "Investasi Cerdas untuk Masa Pensiun: Dari Emas hingga Reksa Dana",
    date: "03 Juni 2025",
    author: "Rudi Santosa",
    content: `
      Investasi menjadi salah satu pilar penting dalam mempersiapkan masa pensiun. Instrumen seperti reksa dana, emas, deposito, hingga saham dividen dapat memberikan penghasilan pasif saat tidak lagi bekerja.

      Diversifikasi portofolio menjadi kunci. Jangan hanya mengandalkan satu jenis investasi. Sebagai contoh, reksa dana memberikan imbal hasil jangka menengah, sedangkan emas menjaga nilai aset dari inflasi.

      Yang paling penting: mulai lebih awal. Semakin dini Anda berinvestasi, semakin besar potensi hasilnya di masa depan.
    `,
    quote:
      "Investasi terbaik adalah yang dimulai hari ini, bukan yang sempurna besok.",
    imageHeader: "/people/blogw6.jpg",
    imageContent: "/people/blogw7.jpg",
  },
  {
    id: "fondasikeuangan",
    title: "Menyiapkan Gaya Hidup Pensiun: Hemat, Sehat, dan Bahagia",
    date: "04 Juni 2025",
    author: "Dewi Aulia",
    content: `
      Masa pensiun tidak harus identik dengan kesepian atau keterbatasan. Dengan perencanaan gaya hidup yang tepat, Anda bisa menjalani hari tua secara mandiri, sehat, dan tetap produktif.

      Kunci utamanya adalah gaya hidup hemat yang tidak mengorbankan kualitas hidup. Misalnya, mengurangi konsumsi barang konsumtif dan fokus pada kebutuhan esensial, seperti kesehatan dan nutrisi.

      Selain itu, aktif secara sosial dan tetap belajar hal baru akan menjaga kualitas hidup dan kebahagiaan di masa pensiun.
    `,
    quote: "Hidup hemat bukan berarti kekurangan, tapi memilih untuk cukup.",
    imageHeader: "/people/blogw8.jpeg",
    imageContent: "/people/blogw9.png",
  },
  {
    id: "gayahiduppensiun",
    title: "Pentingnya Dana Darurat Sebagai Fondasi Keuangan Pensiun",
    date: "05 Juni 2025",
    author: "Andi Prasetya",
    content: `
      Dana darurat adalah komponen penting yang sering diabaikan dalam perencanaan pensiun. Fungsinya untuk mengantisipasi kebutuhan tak terduga seperti biaya medis, perbaikan rumah, atau kebutuhan keluarga.

      Idealnya, dana darurat sebesar 6–12 bulan pengeluaran disiapkan dan disimpan dalam instrumen yang likuid, seperti tabungan atau deposito.

      Dengan adanya dana darurat, investasi pensiun Anda tidak akan terganggu jika terjadi krisis kecil dalam hidup.
    `,
    quote: "Dana darurat adalah pelampung dalam badai keuangan tak terduga.",
    imageHeader: "/people/blogw11.png",
    imageContent: "/people/blogw10.jpg",
  },
];

export default async function BlogDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((item) => item.id === params.id);

  if (!post) {
    return notFound();
  }

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

        <p className="mb-6 text-lg leading-relaxed">{post.content}</p>

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
