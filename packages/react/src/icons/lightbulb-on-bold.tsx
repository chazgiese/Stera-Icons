import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbOnIconBold = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5a6 6 0 0 1 5 9.32c-.846 1.27-1.5 2.255-1.5 3.319v1.36a3 3 0 0 1-1.613 2.658 1.998 1.998 0 0 1-3.774.001A3 3 0 0 1 8.5 19v-1.362c0-1.064-.654-2.05-1.499-3.32A6 6 0 0 1 12 5m-1.5 14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h-3zM12 7a4 4 0 0 0-3.334 6.21c.5.753 1.166 1.699 1.542 2.79h3.583c.377-1.09 1.043-2.036 1.543-2.788A4 4 0 0 0 12 7"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M2.34 8.412a1 1 0 0 1 1.226-.707l.965.259a1 1 0 1 1-.517 1.931l-.966-.258a1 1 0 0 1-.707-1.225M20.435 7.705a1 1 0 1 1 .517 1.932l-.966.258a1 1 0 0 1-.517-1.931zM4.93 3.929a1 1 0 0 1 1.414 0l.707.708A1 1 0 0 1 5.637 6.05l-.707-.707a1 1 0 0 1 0-1.415M17.658 3.929a1 1 0 0 1 1.414 1.415l-.707.707a1 1 0 0 1-1.414-1.414zM9.411 1.34a1 1 0 0 1 1.225.708l.259.966a1 1 0 1 1-1.932.517l-.259-.966a1 1 0 0 1 .707-1.224M13.364 2.048a1 1 0 0 1 1.932.517l-.259.966a1 1 0 1 1-1.931-.517z"
        />
      </svg>
    ))
);
LightbulbOnIconBold.displayName = "LightbulbOnIconBold";
export { LightbulbOnIconBold };
