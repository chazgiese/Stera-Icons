import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsSquareIconBoldDuotone = memo(
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
          d="M19 2a3 3 0 0 1 3 3v14l-.004.154A3 3 0 0 1 19 22h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 .995-.898L20 19V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v14l.005.102A1 1 0 0 0 5 20h2a1 1 0 1 1 0 2H5a3 3 0 0 1-2.996-2.846L2 19V5a3 3 0 0 1 3-3z"
        />
      </svg>
    ))
);
BracketsSquareIconBoldDuotone.displayName = "BracketsSquareIconBoldDuotone";
export { BracketsSquareIconBoldDuotone };
