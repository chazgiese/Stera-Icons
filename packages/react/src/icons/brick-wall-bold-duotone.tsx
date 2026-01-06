import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrickWallIconBoldDuotone = memo(
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
          d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M8 5v3.333h8V5h2v3.333h3v2h-8v3.334h8v2h-3V19h-2v-3.333H8V19H6v-3.333H3v-2h8v-3.334H3v-2h3V5z"
          opacity={0.4}
        />
      </svg>
    ))
);
BrickWallIconBoldDuotone.displayName = "BrickWallIconBoldDuotone";
export { BrickWallIconBoldDuotone };
