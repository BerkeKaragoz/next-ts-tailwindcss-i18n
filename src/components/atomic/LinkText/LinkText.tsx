import Link, { LinkProps } from "next/link";

type Props = React.PropsWithChildren<LinkProps>;

// This component was created for this issue:
// https://github.com/i18next/react-i18next/issues/1090
const LinkText = (props: Props) => {
  return (
    <Link {...props} href={props.href || ""}>
      <a>{props.children}</a>
    </Link>
  );
};

export type { Props as LinkTextProps };
export default LinkText;
