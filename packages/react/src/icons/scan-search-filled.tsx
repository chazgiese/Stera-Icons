import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanSearchFilled = memo(
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
        <g fill="currentColor" clipPath="url(#a)">
          <path d="M2 16.75c.69 0 1.25.56 1.25 1.25v2c0 .414.336.75.75.75h2a1.25 1.25 0 1 1 0 2.5H4A3.25 3.25 0 0 1 .75 20v-2c0-.69.56-1.25 1.25-1.25M22 16.75c.69 0 1.25.56 1.25 1.25v2A3.25 3.25 0 0 1 20 23.25h-2a1.25 1.25 0 1 1 0-2.5h2a.75.75 0 0 0 .75-.75v-2c0-.69.56-1.25 1.25-1.25" />
          <path
            fillRule="evenodd"
            d="M10.5 5.25a5.75 5.75 0 0 1 4.984 8.613l2.577 2.576a1.5 1.5 0 1 1-2.121 2.122l-2.577-2.577A5.75 5.75 0 1 1 10.5 5.25m0 2.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
            clipRule="evenodd"
          />
          <path d="M6 .75a1.25 1.25 0 1 1 0 2.5H4a.75.75 0 0 0-.75.75v2a1.25 1.25 0 1 1-2.5 0V4A3.25 3.25 0 0 1 4 .75zM20 .75A3.25 3.25 0 0 1 23.25 4v2a1.25 1.25 0 1 1-2.5 0V4a.75.75 0 0 0-.75-.75h-2a1.25 1.25 0 1 1 0-2.5z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ))
);
ScanSearchFilled.displayName = "ScanSearchFilled";
export { ScanSearchFilled };
