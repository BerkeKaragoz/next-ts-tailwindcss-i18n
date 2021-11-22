import styles from "./switch.module.css";
import React from "react";
import { nanoid } from "nanoid";

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const { children, disabled, onClick, ...rest } = props;

    const inputId = React.useMemo(() => `app-switch-${nanoid(6)}`, []);

    return (
      <label
        htmlFor={inputId}
        className={
          "inline-flex items-center m-1 align-middle" +
          " " +
          (disabled ? "opacity-50" : "cursor-pointer")
        }
      >
        {children}
        <div className="relative ml-1">
          <input
            type="checkbox"
            className="sr-only"
            id={inputId}
            ref={ref}
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
            {...rest}
          />
          <div //track
            className="h-8 border-2 rounded-full w-14 bg-background-300 dark:border-background-600 dark:bg-background-700"
          />
          <div //circle
            className={
              styles.circle +
              " " +
              "absolute w-6 h-6 transition-transform bg-white dark:bg-background-50 rounded-full left-1 top-1"
            }
          ></div>
        </div>
      </label>
    );
  },
);

Switch.displayName = "App-Switch";

export default Switch;
