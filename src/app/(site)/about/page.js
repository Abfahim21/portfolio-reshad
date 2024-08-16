import Image from "next/image";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {
  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
        <div className="order-2 lg:order-none">
          <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
            I&apos;m Rubait Reshad. I live in Dhaka, Bangladesh, where I design
            the future.
          </h1>

          <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
            I find joy in sharing my knowledge and insights through carefully
            crafted articles. Some of my content has been featured in popular
            blogs and newsletters. <br />
            <br /> I'm also a firm believer in the power of community and
            collaboration. You might spot me at local tech meetups, eagerly
            engaging in discussions and exchanging ideas with fellow developers.
            <br />
            <br />I thrive on the energy of these interactions and value the
            connections formed within our vibrant tech ecosystem. In my spare
            time, when I'm not knee-deep in code or sharing my knowledge, you'll
            find me indulging in a variety of creative pursuits.
            <br /> <br /> Whether it's strumming on my trusty guitar,
            experimenting with watercolors, or getting lost in a captivating
            book, I believe in nurturing a well-rounded life outside of the
            digital realm.
            <br /> <br /> If you ever spot me in the wild, don't hesitate to say
            hello! Let's grab a cup of coffee and geek out over the latest
            advancements in front-end development or discuss our favorite
            obscure programming languages.
          </div>
        </div>

        <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
          <div>
            <Image
              width={400}
              height={400}
              alt="Image of Rubait Reshad"
              src="/reshad r.jpg"
            />

            <a
              href=""
              className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium mt-2"
            >
              <BiFile className="text-base" /> Download Resumé
            </a>
          </div>

          <ul>
            <li>
              <a
                href=""
                className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
              >
                <BiEnvelope className="text-lg" />
                ruby@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-24 max-w-2xl">
        <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
        <p className="text-zinc-400 max-w-lg">
          I&apos;ve spent few years working on my skills. In no particular
          order, here are a few of them.
        </p>

        <ul className="flex flex-wrap items-center gap-3 mt-8">
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
          <li className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1">
            JavaScript
          </li>
        </ul>
      </section>
    </main>
  );
}
