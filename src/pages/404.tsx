import ErrorPage from "@/components/template/ErrorPage/ErrorPage";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [COMMON_TNS])),
    },
  };
};

const Error404Page: NextPage = () => {
  const { t } = useTranslation();

  return <ErrorPage code={404}>{t("page not found")}.</ErrorPage>;
};

export default Error404Page;
