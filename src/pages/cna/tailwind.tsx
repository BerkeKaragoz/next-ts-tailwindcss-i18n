import LinkBox from "@/components/atomic/LinkBox";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

const CardItem: FC<{ title?: string; subtitle?: string; href: string }> = (
  props,
) => {
  const { title, subtitle, children, href } = props;

  return (
    <LinkBox
      href={href}
      className="max-w-sm px-5 py-6 m-4 overflow-hidden text-left duration-150 border border-gray-700 rounded-lg focus:ring-4 border-opacity-10 hover:border-blue-600 hover:border-opacity-100 hover:text-blue-600"
    >
      {title && <h2 className="mb-4 text-2xl">{title} &rarr;</h2>}
      <p className="text-xl">{subtitle || children}</p>
    </LinkBox>
  );
};

const Tailwind: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-center">
      <Head>
        <title>CNA with Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next App page with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="mb-2 text-6xl">
          Welcome to{" "}
          <a
            href="https://nextjs.org"
            className="text-blue-600 hover:underline"
          >
            Next.js!
          </a>
        </h1>
        <p className="text-2xl">
          Get started by editing{" "}
          <code className="px-2 py-1 text-xl bg-gray-100">pages/index.js</code>{" "}
          with{" "}
          <a
            href="https://tailwindcss.com"
            className="text-blue-600 hover:underline"
          >
            Tailwind CSS
          </a>{" "}
          and{" "}
          <a
            href="https://www.typescriptlang.org"
            className="text-blue-600 hover:underline"
          >
            TypeScript.
          </a>
        </p>
        <div className="grid mt-4 lg:grid-cols-2">
          <CardItem title="Documentation" href="https://nextjs.org/docs">
            Find in-depth information about Next.js features and API.
          </CardItem>
          <CardItem title="Learn" href="https://nextjs.org/learn">
            Learn about Next.js in an interactive course with quizzes!
          </CardItem>
          <CardItem
            title="Examples"
            href="https://github.com/vercel/next.js/tree/master/examples"
          >
            Discover and deploy boilerplate example Next.js projects.
          </CardItem>
          <CardItem
            title="Deploy"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            Instantly deploy your Next.js site to a public URL with Vercel.
          </CardItem>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-12 border-t lg:h-24">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center flex-grow unstyled-a"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image
              src="/assets/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Tailwind;
