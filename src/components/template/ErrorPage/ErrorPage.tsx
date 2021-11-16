import { COMMON_TNS } from "@/lib/i18n/consts";
import Link from "next/link";
import { WithTranslation, withTranslation } from "react-i18next";
import { UrlObject } from "url";

type ErrorPageProps = WithTranslation & {
  code?: number | string;
  redCode?: boolean;
  href?: string | UrlObject;
  linkMessage?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { children, t, code, redCode, href, linkMessage } = props;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex-shrink-0">
        <div className="absolute transform -translate-y-12 xsh:-translate-x-12 xsh:-translate-y-28">
          <code
            className={
              "opacity-25 text-6xl xsh:text-9xl  motion-safe:animate-pulse " +
              (redCode && "text-red-800")
            }
          >
            {code || "?"}
          </code>
        </div>
        <h1 className="items-center text-4xl font-bold uppercase-first">
          {children || "An error occured."}
        </h1>
        <hr className="w-4/6 h-1 mx-auto my-4 bg-secondary-400" />
        <Link href={href || "/"}>
          <a className="inline-block p-2 text-xl rounded-md uppercase-firstOnly link focus:ring-2">
            {linkMessage || t("return to homepage")}.
          </a>
        </Link>
      </div>
      <div
        className="flex-shrink hidden xsh:block xsh:bg-red-800"
        style={{ minHeight: "20vh" }}
      />
    </div>
  );
};
export default withTranslation(COMMON_TNS)(ErrorPage);
