import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AwardStarBold = memo(
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
          d="M10.753 1.82c.472-1.092 2.022-1.092 2.494 0l1.374 3.177 3.461.32c1.181.11 1.673 1.582.77 2.372L16.244 9.97l.764 3.373c.264 1.171-1.001 2.067-2.017 1.467L13 13.632V17l.206.005A4 4 0 0 1 17 21.001h.5a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2H7a4 4 0 0 1 3.794-3.996L11 17v-3.368L9.01 14.81c-1.015.6-2.28-.295-2.016-1.467l.763-3.372L5.148 7.69c-.902-.79-.411-2.263.77-2.372l3.46-.32zM11 19a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2zm.063-12.86a1.36 1.36 0 0 1-1.122.814l-2.348.216 1.77 1.548c.373.328.539.834.429 1.32l-.52 2.294 2.037-1.204.164-.083a1.36 1.36 0 0 1 1.055 0l.164.083 2.035 1.203-.519-2.292c-.11-.487.057-.993.43-1.32l1.77-1.549-2.35-.216a1.36 1.36 0 0 1-1.121-.814L12 3.973z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AwardStarBold.displayName = "AwardStarBold";
export { AwardStarBold };
