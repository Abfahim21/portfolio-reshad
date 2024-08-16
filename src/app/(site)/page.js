"use client";
import { Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const workExperiences = [
  {
    company: "Orange Inc",
    role: "Software Engineer",
    duration: "2023-07-01 - 2023-07-31",
    description:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else",
  },
  {
    company: "Prange Inc",
    role: "Software Engineer",
    duration: "2023-07-01 - 2023-07-31",
    description:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else",
  },
  {
    company: "Qrange Inc",
    role: "Software Engineer",
    duration: "2023-07-01 - 2023-07-31",
    description:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else",
  },
  // Add other work experiences here...
];

export default function Home() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Simulate data fetching or any other client-side only operations
    setExperiences(workExperiences);
  }, []);
  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        <div className="lg:max-w-2xl max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            Software Engineer, Technical writer and Designer
          </h1>
          <p className="text-base text-zinc-400 leading-relaxed">
            I'm Rubait Reshad, a passionate Software Developer specializing in
            Python/Django. With a knack for problem-solving, I love creating
            efficient and user-friendly applications, constantly seeking
            innovative ways to improve myself and the world at large
          </p>
          <ul className="flex items-center gap-x-6 my-10">
            <li>
              <a
                href=""
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href=""
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href=""
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href=""
                rel="noreferer noopener"
                className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <Image
          isZoomed
          isBlurred
          radius="lg"
          src="/reshad r.jpg"
          height={500}
          width={400}
        />
      </section>

      <section className="mt-32">
        <div className="mb-16">
          <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
        </div>

        <section className="flex flex-col gap-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
            >
              <a
                href="#"
                rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
              ></a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p>{exp.role}</p>
                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {exp.duration}
                </small>
                <p className="text-base text-zinc-400 my-4">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
