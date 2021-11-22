import { WithTranslation } from "next-i18next";
import { PartialBy } from "./common";

export type ComponentPropsWithTranslation<T> = T &
  PartialBy<WithTranslation, "i18n" | "tReady">;

export type ComponentPropsWithActiveTranslation<T> = T &
  PartialBy<WithTranslation, "tReady">;
