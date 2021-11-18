import { WithTranslation } from "next-i18next";
import { PartialBy } from "./common";

export type ComponentPropsWithTranslation<T> = T &
  PartialBy<WithTranslation, "i18n" | "tReady">;
