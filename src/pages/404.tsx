import ErrorPage from "@/components/template/ErrorPage";
import { NextPage } from "next";

const Error404Page: NextPage = () => {
  return <ErrorPage code={404}>Page not found.</ErrorPage>;
};

export default Error404Page;
