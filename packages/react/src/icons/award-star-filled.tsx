import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AwardStarFilled = memo(
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
          d="M10.753 1.82c.472-1.092 2.022-1.092 2.494 0l1.374 3.177 3.461.32c1.181.11 1.673 1.582.77 2.372L16.244 9.97l.764 3.373c.264 1.171-1.001 2.067-2.017 1.467L13 13.632V17a4 4 0 0 1 4 4h.5a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2H7a4 4 0 0 1 4-4v-3.368L9.01 14.81c-1.015.6-2.28-.295-2.016-1.467l.763-3.372L5.148 7.69c-.902-.79-.411-2.263.77-2.372l3.46-.32z"
        />
      </svg>
    ))
);
AwardStarFilled.displayName = "AwardStarFilled";
export { AwardStarFilled };
