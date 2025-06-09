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
      className="bg-amber-50/30 rounded-2xl shadow-xl p-2 transition transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
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
        "https://private-user-images.githubusercontent.com/210973479/453008106-463ef4dd-ea1a-4079-8913-c582d90efa39.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0NzYxNzUsIm5iZiI6MTc0OTQ3NTg3NSwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MTA2LTQ2M2VmNGRkLWVhMWEtNDA3OS04OTEzLWM1ODJkOTBlZmEzOS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYwOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MDlUMTMzMTE1WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YWQ2MzliNjVmZWJkNWJkNTFkNzJjMGNlZWIyNjQxMTliNDE3ZDhkMDg1NjRlMTU5ODg1YjNiZmEzMmRiZGJlMCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.r85hgYo5IMiYDMgvQTUcy7cm6Q15E7MpS80IvRh0OQ0",
    },
    {
      name: "Qaila Casandra",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008088-b8ef9c63-a254-4f4d-8a8e-ec676f44afa0.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0NzYxNzUsIm5iZiI6MTc0OTQ3NTg3NSwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDg4LWI4ZWY5YzYzLWEyNTQtNGY0ZC04YThlLWVjNjc2ZjQ0YWZhMC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYwOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MDlUMTMzMTE1WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MTA0ZjQyMmQzNWFiZTg4ZWI0ZTNhOWZhMWQwZjVjYjNlZDg3ZWE3MWMwZDcyNDVlMDIyOTI3ZTg1NzBjNDQ1ZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.0p6id-ePooYKqVzBtW-LZGFRugiweBve9o_wclGjWRk",
    },
    {
      name: "Tika Putri Marsanti",
      position: "Machine Learning",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008066-9628f9bf-f2e4-49f5-bfe3-c459c8f51855.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0NzY0NzIsIm5iZiI6MTc0OTQ3NjE3MiwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDY2LTk2MjhmOWJmLWYyZTQtNDlmNS1iZmUzLWM0NTljOGY1MTg1NS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYwOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MDlUMTMzNjEyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MGJlYzQ4YzE2ZmY4YWY3M2NjZTExYWE2MTg5ZDY4OTA4NTk4ZTdmNmVjNzhiMzFlZTJkZWIyY2M3NTY5YTljMCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.UFd2qDpNmrCpGaP9srfV_wjAf6dI2uYZF1BSYAdNtbI",
    },
    {
      name: "Rinaldi Mulya Pratama",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008048-98741083-8483-41d6-9073-4f0b0e131d2d.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0NzY0NzIsIm5iZiI6MTc0OTQ3NjE3MiwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4MDQ4LTk4NzQxMDgzLTg0ODMtNDFkNi05MDczLTRmMGIwZTEzMWQyZC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYwOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MDlUMTMzNjEyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MzkwYWVhNjVmOGMzY2VjMmZkYmEyZmJiY2ExMmU1MjgzZWUyYTk1ZmQwMWNlMjllYzA4ODMwYTc5Nzc2YTg3NSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.tdpPFVZmonFDA4MoV92k1P0w3bRTK6UR-3OJ9jb3Ipw",
    },
    {
      name: "Khairul Fahmi",
      position: "Front End Developer",
      imageUrl:
        "https://private-user-images.githubusercontent.com/210973479/453008683-d13bb812-f9eb-4b0a-abad-8a0430899938.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0NzY0NzIsIm5iZiI6MTc0OTQ3NjE3MiwicGF0aCI6Ii8yMTA5NzM0NzkvNDUzMDA4NjgzLWQxM2JiODEyLWY5ZWItNGIwYS1hYmFkLThhMDQzMDg5OTkzOC5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYwOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MDlUMTMzNjEyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MTA4YmQ3ZDY3MzVhZTE3ZjQ5MDZkYjY0ZmQ5OWQ1YWM4MzRlNDE2ZjBiMzg3YWE2MmVhZjMwMDZlNTYxNjFjMSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.q5S4j83GeyqhWHgMmOZa1xduC_X9aWb-Mfvv0xU5hto",
    },
    {
      name: "Robby Jhony",
      position: "Front End Developer",
      imageUrl: "/people/images.jpeg",
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
