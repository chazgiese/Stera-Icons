import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanSearch = memo(
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
          d="M2 17.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 20v-2a.75.75 0 0 1 .75-.75M22 17.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 20 22.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5 5.75a5.25 5.25 0 0 1 4.352 8.188l2.855 2.855a1 1 0 1 1-1.414 1.414l-2.855-2.855A5.25 5.25 0 1 1 10.5 5.75m0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 1.25a.75.75 0 0 1 0 1.5H4c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V4A2.75 2.75 0 0 1 4 1.25zM20 1.25A2.75 2.75 0 0 1 22.75 4v2a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanSearch.displayName = "ScanSearch";
export { ScanSearch };
