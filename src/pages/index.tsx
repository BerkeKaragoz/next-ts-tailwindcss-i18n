import LinkText from "@/components/atomic/LinkText/LinkText";
import { Header } from "@/components/organism/Header/Header";
import { COMMON_TNS, GLOSSARY_TNS, PAGES_TNS } from "@/lib/i18n/consts";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";
import styles from "./index.module.css";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        PAGES_TNS,
        GLOSSARY_TNS,
        COMMON_TNS,
      ])),
      // Will be passed to the page component as props
    },
  };
};

const Homepage: NextPage = () => {
  const { t } = useTranslation([PAGES_TNS], { keyPrefix: "index" });
  const { t: gt } = useTranslation([GLOSSARY_TNS]);

  return (
    <div
      className={
        "flex flex-col items-center justify-center min-h-screen text-start" +
        " " +
        styles.root
      }
    >
      <Head>
        <title>next-ts-tailwindcss-i18n</title>
        <meta
          name="description"
          content="A boilerplate made for E. Berke Karagöz's website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-lg px-2 py-8">
        <h1 className="mb-1 text-5xl font-semibold capitalize cursor-default select-none sm:text-6xl">
          <Trans
            t={t}
            i18nKey="pageTitle"
            values={{ name: "E. Berke Karagöz" }}
            components={{
              1: (
                <a
                  href="https://www.linkedin.com/in/berkekaragoz/"
                  className="font-bold cursor-pointer select-text link"
                />
              ),
            }}
          >
            {"Hi, I'm "}
            <br />
            <a
              href="https://www.linkedin.com/in/berkekaragoz/"
              className="font-bold cursor-pointer select-text link"
            >
              E. Berke Karagöz
            </a>
            {"."}
          </Trans>
        </h1>
        <p className="max-w-sm text-xl font-medium select-none">
          <Trans
            t={t}
            i18nKey="pageSubtitle"
            components={{ 1: <a href="https://berkekaragoz.com" /> }}
          />
        </p>
        <dl className={styles.dList}>
          <dt>
            <a href="https://nextjs.org/">Next.js</a>
          </dt>
          <dd>{t("nextjsDesc")}</dd>
          <dt>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </dt>
          <dd>{t("tsDesc")}</dd>
          <dt>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </dt>
          <dd>
            {t("tailwindcssDesc")}
            <ul className="ms-2 sm:ms-4 indent-xs sm:indent-sm">
              <li>
                <a href="https://v1.tailwindcss.com/docs/typography-plugin">
                  @tailwindcss/typography
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/tailwindcss-rtl">
                  tailwindcss-rtl
                </a>
                <i className="text-sm">
                  {" ("}
                  <Trans
                    t={gt}
                    i18nKey="by_someone"
                    values={{ name: "20lives" }}
                  >
                    by <a href="https://github.com/20lives">20lives</a>
                  </Trans>
                  {")"}
                </i>
              </li>
              <li>
                {t("themeColors")}
                <code className="block text-sm ms-6">
                  {`primary, secondary, accent, background`}
                </code>
              </li>
            </ul>
          </dd>
          <dt>
            <a href="https://github.com/isaachinman/next-i18next">
              next-i18next
            </a>
          </dt>
          <dd>
            <Trans t={t} i18nKey="i18nextDesc">
              {"Internationalization framework for Next.js which uses "}
              <a href="https://react.i18next.com/">react-i18next</a> under the
              hood.
            </Trans>
          </dd>
          <dt>
            <a href="https://jestjs.io/">Jest</a> {gt("and")}{" "}
            <a href="https://testing-library.com/docs/react-testing-library/intro/">
              React Testing Library
            </a>
          </dt>
          <dd>{t("testingDesc")}</dd>
          <hr className="my-1" />
          <dt>
            <a href="https://bradfrost.com/blog/post/atomic-web-design/">
              atomic design
            </a>
          </dt>
          <dd>{t("atomicDesignDesc")}</dd>
          <hr className="my-1" />
          <dt>{t("errorPageTerm")}</dt>
          <dd>
            <Trans
              t={t}
              i18nKey="errorPageDesc"
              components={{
                1: <LinkText href="/404" />,
                3: <LinkText href="/500" />,
              }}
            />
          </dd>
          <dt>{t("heightBreakpointsTerm")}</dt>
          <dd>
            <code>xsh, smh, mdh, lgh, xlh</code>.
          </dd>
          <dt>{t("importPathTerm")}</dt>
          <dd>
            <code>@/components</code>, <code>@/lib</code>, <code>@/styles</code>
            ...
          </dd>
          <hr className="my-1" />
          <dt>{t("recommendedVSCodeTerm")}</dt>
          <dd>
            <a href="https://marketplace.visualstudio.com/items?itemName=heybourn.headwind">
              Headwind
            </a>
            {", "}
            <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag">
              Auto Rename Tag
            </a>{" "}
            {` ${gt("and")} `}
            <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
              Prettier
            </a>
            .
          </dd>
          <dt>
            <Link href="/cna">{t("cnaSamplesTerm")}</Link>
          </dt>
          <dd>
            <Trans
              t={t}
              i18nKey="cnaSamplesDesc"
              components={{
                1: (
                  <a href="https://nextjs.org/docs/api-reference/create-next-app" />
                ),
              }}
            />
          </dd>
          <dt className="capitalize">{gt("other")}</dt>
          <dd>
            <Trans
              t={t}
              i18nKey="otherCheckSnippetsDesc"
              components={{ 1: <code /> }}
            />
          </dd>
          <dd>{t("otherCareMotionDesc")}</dd>
          <dd>{t("otherTryToUseDesc")}</dd>
          <dd>
            <Trans t={t} i18nKey="otherUseEmmetDesc">
              {"Use "}
              <a href="https://code.visualstudio.com/docs/editor/emmet">
                Emmet
              </a>
              .
            </Trans>
          </dd>
        </dl>
      </main>
    </div>
  );
};

export default Homepage;
