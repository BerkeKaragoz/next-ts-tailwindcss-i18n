import LinkBox from "@/components/atomic/LinkBox/LinkBox";
import { PAGES_TNS } from "@/lib/i18n/consts";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import { Trans, useTranslation } from "react-i18next";

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
  const { t } = useTranslation([PAGES_TNS], { keyPrefix: "cna.custom" });

  return (
    <div className="flex flex-col min-h-screen text-center">
      <Head>
        <title>{t("documentTitle")}</title>
        <meta name="description" content={t("documentDesc")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="mb-2 text-6xl">
          <Trans t={t} i18nKey="pageTitle">
            {"Welcome to "}
            <a href="https://nextjs.org" className="link">
              Next.js
            </a>
            !
          </Trans>
        </h1>
        <p className="text-2xl">
          <Trans t={t} i18nKey="pageSubtitle">
            {"Get started by editing "}
            <code className="px-2 py-1 text-xl bg-gray-100">
              pages/index.tsx
            </code>
            {" with "}
            <a href="https://tailwindcss.com" className="link">
              Tailwind CSS
            </a>
            {", "}
            <a
              href="https://github.com/isaachinman/next-i18next"
              className="link"
            >
              next-i18next
            </a>
            {" and "}
            <a href="https://www.typescriptlang.org" className="link">
              TypeScript
            </a>
            .
          </Trans>
        </p>
        <div className="grid mt-4 lg:grid-cols-2">
          <CardItem title={t("docsTitle")} href="https://nextjs.org/docs">
            {t("docsDesc")}
          </CardItem>
          <CardItem title={t("learnTitle")} href="https://nextjs.org/learn">
            {t("learnDesc")}
          </CardItem>
          <CardItem
            title={t("examplesTitle")}
            href="https://github.com/vercel/next.js/tree/master/examples"
          >
            {t("examplesDesc")}
          </CardItem>
          <CardItem
            title={t("deployTitle")}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            {t("deployDesc")}
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
          {"Powered by "}
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [PAGES_TNS])),
    },
  };
};

export default Tailwind;
