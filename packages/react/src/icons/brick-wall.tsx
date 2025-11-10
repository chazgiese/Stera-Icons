import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrickWallIcon = memo(
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
          d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM3 18a1 1 0 0 0 1 1h2v-3.333H3zm15 1h2a1 1 0 0 0 1-1v-2.333h-3zM8 19h8v-3.333H8zm-5-5.333h8v-3.334H3zm10 0h8v-3.334h-8zM4 5a1 1 0 0 0-1 1v2.333h3V5zm4 3.333h8V5H8zm10 0h3V6a1 1 0 0 0-1-1h-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BrickWallIcon.displayName = "BrickWallIcon";
export { BrickWallIcon };
