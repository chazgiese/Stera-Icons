import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AwardStarIconBoldDuotone = memo(
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
          d="M13 13.633V17a4 4 0 0 1 4 4l-10 .001A4 4 0 0 1 11 17v-3.367l1-.591zM11 19a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.5 21a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.753 1.82c.472-1.092 2.022-1.092 2.494 0l1.374 3.177 3.461.32c1.181.11 1.673 1.582.77 2.372L16.244 9.97l.764 3.373c.264 1.172-1.001 2.067-2.017 1.467L12 13.042 9.01 14.81c-1.015.6-2.28-.295-2.016-1.467l.763-3.372L5.148 7.69c-.902-.79-.411-2.263.77-2.372l3.46-.32zm.31 4.32a1.36 1.36 0 0 1-1.122.814l-2.348.217 1.77 1.547c.373.328.539.834.429 1.32l-.52 2.294 2.037-1.203.164-.083a1.36 1.36 0 0 1 1.055 0l.164.083 2.035 1.202-.519-2.292c-.11-.487.057-.993.43-1.32l1.77-1.548-2.35-.217a1.36 1.36 0 0 1-1.121-.814L12 3.973z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AwardStarIconBoldDuotone.displayName = "AwardStarIconBoldDuotone";
export { AwardStarIconBoldDuotone };
