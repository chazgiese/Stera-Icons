import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXAxisBigBold = memo(
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
        <path fill="currentColor" d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.75 5A2.25 2.25 0 0 1 8 7.25v9a2.25 2.25 0 0 1-2.25 2.25h-1.5A2.25 2.25 0 0 1 2 16.25v-9A2.25 2.25 0 0 1 4.25 5zm-1.5 2a.25.25 0 0 0-.25.25v9c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9A.25.25 0 0 0 5.75 7zM12.75 2A2.25 2.25 0 0 1 15 4.25v12a2.25 2.25 0 0 1-2.25 2.25h-1.5A2.25 2.25 0 0 1 9 16.25v-12A2.25 2.25 0 0 1 11.25 2zm-1.5 2a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-12a.25.25 0 0 0-.25-.25zM19.75 7A2.25 2.25 0 0 1 22 9.25v7a2.25 2.25 0 0 1-2.25 2.25h-1.5a2.25 2.25 0 0 1-2.238-2.02L16 16.25v-7A2.25 2.25 0 0 1 18.25 7zm-1.5 2a.25.25 0 0 0-.25.25v7l.005.05a.25.25 0 0 0 .245.2h1.5a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarXAxisBigBold.displayName = "ChartBarXAxisBigBold";
export { ChartBarXAxisBigBold };
