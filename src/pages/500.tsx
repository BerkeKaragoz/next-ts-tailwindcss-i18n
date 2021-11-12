import ErrorPage from "@/components/template/ErrorPage";
import { NextPage } from "next";

const Error500Page: NextPage = () => {
  return (
    <ErrorPage code={500} redCode>
      Server-side error occured.
    </ErrorPage>
  );
};

export default Error500Page;
