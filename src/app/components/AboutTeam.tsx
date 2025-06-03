"use client";
import React from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  imageUrl,
}) => (
  <article
    className="bg-amber-50/30 rounded-2xl shadow-xl p-2 hover:-translate-y-3 hover:shadow-lg transition duration-300 ease-in-out"
    aria-label={`Profil ${name}`}
  >
    <figure className="w-full h-64 overflow-hidden rounded-lg">
      <Image
        src={imageUrl || "/api/placeholder/400/320"}
        alt={name}
        className="object-cover w-full h-full"
        width={400}
        height={320}
      />
    </figure>
    <figcaption className="text-center p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-green-500">{position}</p>
    </figcaption>
  </article>
);

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Robby Jhony",
      position: "Front End Developer",
      imageUrl: "/people/download(1).jpeg",
    },
    {
      name: "Robby Jhony",
      position: "Front End Developer",
      imageUrl: "/people/download(2).jpeg",
    },
    {
      name: "Robby Jhony",
      position: "Front End Developer",
      imageUrl: "/people/download.jpeg",
    },
    {
      name: "Robby Jhony",
      position: "Front End Developer",
      imageUrl: "/people/images(1).jpeg",
    },
    {
      name: "Robby Jhony",
      position: "Front End Developer",
      imageUrl: "/people/images(2).jpeg",
    },
    {
      name: "Robby Jhony",
      position: "Front End Developer",
      imageUrl: "/people/images.jpeg",
    },
  ];

  return (
    <section id="tentang" className="relative bg-white">
      {/* Hero Section */}
      <div className="container mx-auto py-20 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-green-500 font-semibold mb-3 text-lg tracking-wide uppercase">
              Tentang Kami
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              We are the team of enthusiasts
            </h1>
          </div>
          <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
            PENSi (Personalized Estimator for a Nice & Secure Income) merupakan
            sebuah platform berbasis web yang dirancang untuk membantu individu
            di Indonesia dalam merencanakan dana pensiun secara personal dan
            akurat. Platform ini bertujuan untuk memberikan estimasi kebutuhan
            dana pensiun yang disesuaikan dengan kondisi finansial, gaya hidup,
            dan tujuan pensiun masing-masing pengguna.
          </div>
        </div>
      </div>

      {/* Dekorasi Vektor Kiri Bawah */}
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src="/vector/82.png"
          alt="Bottom left decoration"
          width={200}
          height={200}
        />
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-20 px-4 md:px-8 relative z-10">
        <header className="text-center mb-14">
          <h2 className="text-4xl font-bold">Let's Meet Our Team</h2>
          <div className="h-1 w-32 bg-green-500 mx-auto mt-2 rounded-full"></div>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
