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
}) => {
  return (
    <article
      className="bg-amber-50/30 rounded-2x2 shadow-xl p-2 transition transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
      aria-label={`Profil ${name}`}
    >
      <figure className="w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={imageUrl || "/api/placeholder/400/320"}
          alt={name}
          className="w-full h-full object-cover"
          width={400}
          height={320}
        />
      </figure>
      <figcaption className="p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-primary">{position}</p>
      </figcaption>
    </article>
  );
};

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Nicholas Anaya Putra",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008106-463ef4dd-ea1a-4079-8913-c582d90efa39.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mzc1MTAsIm5iZiI6MTc0OTYzNzIxMCwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MTA2LTQ2M2VmNGRkLWVhMWEtNDA3OS04OTEzLWM1ODJkOTBlZmEzOS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMTAyMDEwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NDZjYmQ1YjgyNDE2NTNkOTcyN2QwNGYzZGYyZmUzZTk3YmUwZWQ5MGJjZmM4ZmU0ZTg5ZTMxMDlmYTliMmU5MCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.DOVxEuhIiyr1Jj7oP5CF65SCO97_AR8fWYXiOxa6Ksg",
    },
    {
      name: "Qaila Casandra",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008088-b8ef9c63-a254-4f4d-8a8e-ec676f44afa0.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mzc1MTAsIm5iZiI6MTc0OTYzNzIxMCwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDg4LWI4ZWY5YzYzLWEyNTQtNGY0ZC04YThlLWVjNjc2ZjQ0YWZhMC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMTAyMDEwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZTFlNDZmY2Y2OGYyNjdjMmFhM2ExMzM2OTA3OWJmNGI4MzA0M2FlNDJiZmZkOTMyODJhM2JiZWY5YmY0YzVhMSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.UrIb95KL1_xk0ur-LKYch3tfa18c01d8rx5r6O_Y2as",
    },
    {
      name: "Tika Putri Marsanti",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008066-9628f9bf-f2e4-49f5-bfe3-c459c8f51855.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mzc1MTAsIm5iZiI6MTc0OTYzNzIxMCwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDY2LTk2MjhmOWJmLWYyZTQtNDlmNS1iZmUzLWM0NTljOGY1MTg1NS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMTAyMDEwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZDEwYzlhNTExNDQ0M2Y1NzQyNDcxMjU4NjNjY2I0NDcxYzViNTgzMmY1MzBlOTk5NzE3ODdmYTQxMjI4YjExOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.Yc-tkFXmpvNS6uJYzxHhgxfQDN3I3BrL6xDGgwtxDkU",
    },
    {
      name: "Rinaldi Mulya Pratama",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008048-98741083-8483-41d6-9073-4f0b0e131d2d.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mzc1MTAsIm5iZiI6MTc0OTYzNzIxMCwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDQ4LTk4NzQxMDgzLTg0ODMtNDFkNi05MDczLTRmMGIwZTEzMWQyZC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMTAyMDEwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjUwNGViNzZmOGUwMDFkY2NkN2EzNTMwMDU3OTY5MTRjODYwMjFhZjRlMmQ4NzM3NTM4ZTJhN2I1MGU2ZDMyOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.lllH8UJGnRHzYPfCHTObC1wBWxxhVgsJMukWYpPS8bA",
    },
    {
      name: "Khairul Fahmi",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008683-d13bb812-f9eb-4b0a-abad-8a0430899938.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mzc1MTAsIm5iZiI6MTc0OTYzNzIxMCwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4NjgzLWQxM2JiODEyLWY5ZWItNGIwYS1hYmFkLThhMDQzMDg5OTkzOC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMTAyMDEwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Yjg2MDQxZGU2MDcwYTg5M2RkNzE1ZTJkNjlkM2MwOGIyOWM4NGViZjM1YjAyMWJkMjNmMWRlZGY0MTA1ZTM0NSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.zVez4t2iJmwqAkKGA1ZZkWNUdlsYib67zLA95xT2Nwo",
    },
    {
      name: "Muhammad Baliyun Taja",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453028241-ed5ef8ba-c784-41ed-8fff-a232346d721b.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk2Mzc1MTAsIm5iZiI6MTc0OTYzNzIxMCwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDI4MjQxLWVkNWVmOGJhLWM3ODQtNDFlZC04ZmZmLWEyMzIzNDZkNzIxYi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYxMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MTFUMTAyMDEwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YjgzMDRmZTQ5NTBhN2I1M2Q5ZThkZWEwNTBlM2MzMjEwYTBkY2Q2MTkzMmFmMzA4Nzk2NTM2YWE5MmRmMjMyNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.jNAQPxYpx_yM4e3NUNBaw5EW9G3C8opvl0LWBSp1A_M",
    },
  ];

  return (
    <main id="tentang" className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-8 md:px-6">
        <header className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-full md:w-1/2 text-start md:text-left">
            <h2 className="text-primary font-medium mb-2">Tentang Kami</h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              We are the team of enthusiasts
            </h1>
          </div>
          <div className="w-full md:w-1/2 text-start md:text-left">
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              PENSi (Personalized Estimator for a Nice & Secure Income)
              merupakan sebuah platform berbasis web yang dirancang untuk
              membantu individu di Indonesia dalam merencanakan dana pensiun
              secara personal dan akurat. Platform ini bertujuan untuk
              memberikan estimasi kebutuhan dana pensiun yang disesuaikan dengan
              kondisi finansial, gaya hidup, dan tujuan pensiun masing-masing
              pengguna.
            </p>
          </div>
        </header>
      </section>

      {/* Decorative Image (optional position tweaking) */}
      <div className="absolute -bottom-12 left-0 z-0">
        <Image
          src="/vector/82.png"
          alt="Bottom left decoration"
          width={100}
          height={300}
        />
      </div>

      {/* Team Section */}
      <section className="relative z-10 container mx-auto py-16 px-4 md:px-6">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s Meet Our Team
          </h2>
          <div className="h-1 w-32 md:w-60 bg-primary mt-2 mx-auto rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutTeam;
