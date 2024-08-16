"use client";
import { Image } from "@nextui-org/react";
import * as React from "react";

export default function Home() {
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
          src="/reshad r.jpg"
          height={500}
          width={400}
        />
      </section>
    </main>
  );
}
