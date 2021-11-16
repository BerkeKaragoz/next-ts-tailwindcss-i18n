import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import LinkBox from "@/components/atomic/LinkBox/LinkBox";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PAGES_TNS } from "@/lib/i18n/consts";
import { Trans, useTranslation } from "react-i18next";

const CreateNextApp: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation([PAGES_TNS], { keyPrefix: "cna.index" });

  return (
    <div className="container flex flex-col justify-center min-h-screen m-auto text-center">
      <Head>
        <title>{t("documentTitle")}</title>
        <meta name="description" content={t("documentDesc")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl font-semibold">
        <Trans t={t} i18nKey="pageTitle">
          <a
            title="CNA"
            href="https://nextjs.org/docs/api-reference/create-next-app"
            className="link"
          >
            Create Next App
          </a>
          {" Welcome Pages"}
        </Trans>
      </h1>
      <p className="mt-2 mb-3 text-xl">{t("pageSubtitle")}</p>
      <div className="grid max-w-4xl grid-cols-1 gap-8 px-2 mx-auto my-4 text-left lg:grid-cols-2">
        <LinkBox
          href={`${router.route}/default`}
          className="p-4 duration-150 border rounded-lg shadow-sm border-primary-600 border-opacity-20 hover:text-primary-600 hover:border-opacity-80 hover:shadow-xl"
        >
          <h2 className="mb-2 text-2xl">Default CNA &rarr;</h2>
          <p className="text-lg">{t("defaultDesc")}</p>
        </LinkBox>
        <LinkBox
          href={`${router.route}/custom`}
          className="p-4 duration-150 border rounded-lg shadow-sm border-primary-600 border-opacity-20 hover:text-primary-600 hover:border-opacity-80 hover:shadow-xl"
        >
          <h2 className="mb-2 text-2xl">Custom CNA &rarr;</h2>
          <p className="text-lg">
            <Trans t={t} i18nKey="customDesc">
              {"CNA page that I wrote with "}
              <span
                title="https://tailwindcss.com/"
                className="text-primary-600"
              >
                Tailwind CSS
              </span>
              {" as an example."}
            </Trans>
          </p>
        </LinkBox>
      </div>
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

export default CreateNextApp;
