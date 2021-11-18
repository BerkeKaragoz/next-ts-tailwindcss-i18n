import Link, { LinkProps } from "next/link";

// This component was created for this issue:
// https://github.com/i18next/react-i18next/issues/1090
const LinkText = (props: React.PropsWithChildren<LinkProps>) => {
  return (
    <Link {...props} href={props.href || ""}>
      <a>{props.children}</a>
    </Link>
  );
};

export default LinkText;
