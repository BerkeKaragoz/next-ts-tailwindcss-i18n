import { NextPage } from "next";
import styles from "@/styles/pages/index.module.css";
import Head from "next/head";
import Link from "next/link";

const Homepage: NextPage = () => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center min-h-screen text-start" +
        " " +
        styles.root
      }
    >
      <Head>
        <title>E. Berke Karagöz</title>
        <meta name="description" content="E. Berke Karagöz Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-lg px-2 py-8">
        <h1 className="mb-1 text-5xl font-semibold cursor-default select-none sm:text-6xl">
          {"Hi, I'm"}
          <br />
          <a
            href="https://www.linkedin.com/in/berkekaragoz/"
            className="font-bold cursor-pointer select-text link"
          >
            {"E. Berke Karagöz"}
          </a>
          .
        </h1>
        <p className="max-w-sm text-xl font-medium select-none">
          I made this boilerplate while developing{" "}
          <a href="https://berkekaragoz.com">my personal website</a>.
        </p>
        <dl className={styles.dList}>
          <dt>
            <a href="https://nextjs.org/">Next.js</a>
          </dt>
          <dd>Amazing developer experience.</dd>
          <dt>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </dt>
          <dd>Safety and tight integration with your editor.</dd>
          <dt>
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </dt>
          <dd>
            A rapid and utility-first CSS framework.{" "}
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
                  {" "}
                  (by <a href="https://github.com/20lives">20lives</a>)
                </i>
              </li>
              <li>
                Theme Colors
                <code className="block text-sm ms-6">
                  {`primary, secondary, accent, background`}
                </code>
              </li>
            </ul>
          </dd>
          <dt>i18n</dt>
          <dd>To be added.</dd>
          <hr className="my-1" />
          <dt>
            <a href="https://bradfrost.com/blog/post/atomic-web-design/">
              atomic design
            </a>
          </dt>
          <dd>Methodology for creating design systems.</dd>
          <hr className="my-1" />
          <dt>Error Page Template</dt>
          <dd>
            <Link href="/404">404</Link> and <Link href="/500">500</Link> error
            pages do exist as a sample.
          </dd>
          <dt>Height Breakpoints and Media Queries</dt>
          <dd>
            <code>xsh, smh, mdh, lgh, xlh</code>.
          </dd>
          <dt>Import Path Aliases</dt>
          <dd>
            <code>@/components</code>, <code>@/lib</code> and{" "}
            <code>@/styles</code>.
          </dd>
          <hr className="my-1" />
          <dt>Recommended VSCode Extensions</dt>
          <dd>
            <a href="https://marketplace.visualstudio.com/items?itemName=heybourn.headwind">
              Headwind
            </a>
            {", "}
            <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag">
              Auto Rename Tag
            </a>{" "}
            {" and "}
            <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
              Prettier
            </a>
            .
          </dd>
          <dt>
            <Link href="/cna">CNA Samples</Link>
          </dt>
          <dd>
            You can check out modified{" "}
            <a href="https://nextjs.org/docs/api-reference/create-next-app">
              Create Next App
            </a>{" "}
            welcome pages as small examples.
          </dd>
          <dt>Other</dt>
          <dd>
            Check the snippets under <code>.vscode</code>.
          </dd>
          <dd>Care motion and color scheme preference.</dd>
          <dd>Try to use text-direction sensitive properties.</dd>
          <dd>
            Use{" "}
            <a href="https://code.visualstudio.com/docs/editor/emmet">Emmet</a>.
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Homepage;
