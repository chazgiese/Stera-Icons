import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsCurlyIconFilltone = memo(
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
          d="M17.5 1.5A3.5 3.5 0 0 1 21 5v2.838c0 1.243.796 2.346 1.975 2.74a1.5 1.5 0 0 1 0 2.845A2.89 2.89 0 0 0 21 16.163V19a3.5 3.5 0 0 1-3.5 3.5h-1a1.5 1.5 0 0 1 0-3h1a.5.5 0 0 0 .5-.5v-2.838c0-1.598.645-3.083 1.725-4.163A5.88 5.88 0 0 1 18 7.838V5a.5.5 0 0 0-.5-.5h-1a1.5 1.5 0 0 1 0-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.5 1.5a1.5 1.5 0 1 1 0 3h-1A.5.5 0 0 0 6 5v2.838a5.88 5.88 0 0 1-1.725 4.161A5.89 5.89 0 0 1 6 16.162V19a.5.5 0 0 0 .5.5h1a1.5 1.5 0 0 1 0 3h-1A3.5 3.5 0 0 1 3 19v-2.838a2.89 2.89 0 0 0-1.975-2.74 1.5 1.5 0 0 1 0-2.845A2.89 2.89 0 0 0 3 7.837V5a3.5 3.5 0 0 1 3.5-3.5z"
        />
      </svg>
    ))
);
BracketsCurlyIconFilltone.displayName = "BracketsCurlyIconFilltone";
export { BracketsCurlyIconFilltone };
