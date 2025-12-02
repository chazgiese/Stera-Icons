import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanSearchIcon = memo(
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
          d="M3 16.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2a.75.75 0 0 1 .75-.75M21 16.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 6.25a4.75 4.75 0 0 1 3.99 7.325l2.217 2.218a1 1 0 1 1-1.414 1.414l-2.218-2.218A4.75 4.75 0 1 1 11 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5c.873 0 1.662-.347 2.246-.906a1 1 0 0 1 .098-.098c.56-.584.906-1.373.906-2.246A3.25 3.25 0 0 0 11 7.75"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanSearchIcon.displayName = "ScanSearchIcon";
export { ScanSearchIcon };
