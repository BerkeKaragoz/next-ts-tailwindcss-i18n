import { COMMON_TNS, GLOSSARY_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import styles from "./header.module.css";
import { useTheme } from "next-themes";
import React from "react";
import { useRouter } from "next/router";
import Switch from "@/components/atomic/Switch/Switch";

type HeaderProps = {};

/** Make sure to pass GLOSSARY_TNS and COMMON_TNS to where it is called */
export const Header: React.FC<HeaderProps> = (props) => {
  //const { children } = props;
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const { t, i18n } = useTranslation([GLOSSARY_TNS, COMMON_TNS]);

  const handleSelectLang = (event: any) => {
    //TODO as hook
    const l = event.target.value;
    i18n.changeLanguage(l);
    router.push(router.route, undefined, { locale: l });
  };
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="fixed top-0 w-full px-2 border-b-2 border-opacity-20 h-14 bg-background-100 bg-opacity-80 dark:bg-background-900 dark:bg-opacity-80 backdrop-filter backdrop-blur-lg">
        <div className="flex items-center justify-between max-w-lg m-auto">
          <div>
            <label
              htmlFor="lang"
              className="hidden sm:inline-block uppercase-first"
            >
              {t("language")}:
            </label>
            <select
              name="lang"
              id="lang"
              className="p-1 m-2 uppercase border-2 rounded-lg cursor-pointer focus:ring-2"
              onChange={handleSelectLang}
              defaultValue={router.locale}
            >
              {router.locales?.map((l) => (
                <option value={l} key={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <a
            className="link"
            href="https://github.com/BerkeKaragoz/next-ts-tailwindcss-i18n"
          >
            GitHub
          </a>
          <Switch
            onClick={switchTheme}
            defaultChecked={theme === "light"}
            disabled={!isMounted}
          >
            <span className="uppercase-first">
              {t("light mode", { ns: COMMON_TNS })}:
            </span>
          </Switch>
        </div>
      </header>
      <div className="h-14" />
    </>
  );
};

export default Header;
