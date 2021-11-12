import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import LinkBox from "@/components/atomic/LinkBox";

const CreateNextApp: NextPage = () => {
  const router = useRouter();

  return (
    <div className="container flex flex-col justify-center min-h-screen m-auto text-center">
      <Head>
        <title>CNA Welcome Pages</title>
        <meta name="description" content="Create Next App pages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl font-semibold">
        <a
          title="CNA"
          href="https://nextjs.org/docs/api-reference/create-next-app"
          className="text-primary-600 hover:underline"
        >
          Create Next App
        </a>{" "}
        Welcome Pages
      </h1>
      <p className="mt-2 mb-3 text-xl">I keep them for showing samples.</p>
      <div className="grid max-w-4xl grid-cols-1 gap-8 px-2 mx-auto my-4 text-left lg:grid-cols-2">
        <LinkBox
          href={`${router.route}/default`}
          className="p-4 duration-150 border rounded-lg shadow-sm border-primary-600 border-opacity-20 hover:text-primary-600 hover:border-opacity-80 hover:shadow-xl"
        >
          <h2 className="mb-2 text-2xl">Default CNA &rarr;</h2>
          <p className="text-lg">
            CNA page that comes with initial Next.js project.
          </p>
        </LinkBox>
        <LinkBox
          href={`${router.route}/tailwind`}
          className="p-4 duration-150 border rounded-lg shadow-sm border-primary-600 border-opacity-20 hover:text-primary-600 hover:border-opacity-80 hover:shadow-xl"
        >
          <h2 className="mb-2 text-2xl">Tailwind CSS CNA &rarr;</h2>
          <p className="text-lg">
            CNA page that I wrote with{" "}
            <span title="https://tailwindcss.com/" className="text-primary-600">
              Tailwind CSS
            </span>{" "}
            as an example.
          </p>
        </LinkBox>
      </div>
    </div>
  );
};

export default CreateNextApp;
