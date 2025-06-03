import Image from "next/image";
import { notFound } from "next/navigation";
import Subscription from "@/app/components/Subscription";

// Simulasi data detail blog
const blogPosts = [
  {
    id: "perencanaan",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Digital technologies like VR and AI continue to evolve and push the boundaries of what is possible in game development. These tools offer developers the opportunity to create immersive and responsive gaming experiences that were unimaginable a decade ago. The integration of VR allows players to physically interact with the game world, while AI adds a layer of intelligence to both game mechanics and narrative design.
    `,
    quote:
      "People worry their computers will get too smart and take over the world, but the real problem is they’re too stupid and they’ve already taken over the world.",
    imageHeader: "/images/vr-1.jpg",
    imageContent: "/images/vr-2.jpg",
  },
  {
    id: "bestpractices",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Digital technologies like VR and AI continue to evolve and push the boundaries of what is possible in game development. These tools offer developers the opportunity to create immersive and responsive gaming experiences that were unimaginable a decade ago. The integration of VR allows players to physically interact with the game world, while AI adds a layer of intelligence to both game mechanics and narrative design.
    `,
    quote:
      "People worry their computers will get too smart and take over the world, but the real problem is they’re too stupid and they’ve already taken over the world.",
    imageHeader: "/images/vr-1.jpg",
    imageContent: "/images/vr-2.jpg",
  },
  {
    id: "fondasikeuangan",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Digital technologies like VR and AI continue to evolve and push the boundaries of what is possible in game development. These tools offer developers the opportunity to create immersive and responsive gaming experiences that were unimaginable a decade ago. The integration of VR allows players to physically interact with the game world, while AI adds a layer of intelligence to both game mechanics and narrative design.
    `,
    quote:
      "People worry their computers will get too smart and take over the world, but the real problem is they’re too stupid and they’ve already taken over the world.",
    imageHeader: "/images/vr-1.jpg",
    imageContent: "/images/vr-2.jpg",
  },
  {
    id: "gayahiduppensiun",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    date: "02 Juni 2025",
    author: "Indah Pertiwi",
    content: `
      Digital technologies like VR and AI continue to evolve and push the boundaries of what is possible in game development. These tools offer developers the opportunity to create immersive and responsive gaming experiences that were unimaginable a decade ago. The integration of VR allows players to physically interact with the game world, while AI adds a layer of intelligence to both game mechanics and narrative design.
    `,
    quote:
      "People worry their computers will get too smart and take over the world, but the real problem is they’re too stupid and they’ve already taken over the world.",
    imageHeader: "/images/vr-1.jpg",
    imageContent: "/images/vr-2.jpg",
  },
];

export default function BlogDetail({ params }: { params: { id: string } }) {
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

        <p className="mb-6 text-lg leading-relaxed">
          AI is also helpful in personalizing player experiences – adjusting
          difficulty, adapting narratives, and responding intelligently to
          player choices. Combined with VR, this creates truly personalized and
          engaging gameplay loops that make players feel central to the story.
        </p>

        <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.imageContent}
            alt="Game AI"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed">
          In conclusion, both VR and AI offer incredible potential for the
          future of gaming. Developers who embrace these tools will be better
          equipped to craft unforgettable interactive experiences.
        </p>
      </main>

      <Subscription />
    </>
  );
}
