import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBar = memo(
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
          d="M4.833 7.25a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25H3.5a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 3.5 7.25zM3.5 8.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h1.333a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zM12.897 3.262A2.25 2.25 0 0 1 14.916 5.5v13a2.25 2.25 0 0 1-2.25 2.25h-1.333a2.25 2.25 0 0 1-2.25-2.25v-13a2.25 2.25 0 0 1 2.25-2.25h1.333zM11.333 4.75a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h1.333a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.673-.746l-.077-.004zM20.5 10.25a2.25 2.25 0 0 1 2.25 2.25v6a2.25 2.25 0 0 1-2.25 2.25h-1.333a2.25 2.25 0 0 1-2.25-2.25v-6a2.25 2.25 0 0 1 2.25-2.25zm-1.333 1.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H20.5a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBar.displayName = "ChartBar";
export { ChartBar };
