import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsSquareIconDuotone = memo(
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
          d="M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25z"
        />
        <path
          fill="currentColor"
          d="M19 2.25A2.75 2.75 0 0 1 21.75 5v14A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z"
          opacity={0.4}
        />
      </svg>
    ))
);
BracketsSquareIconDuotone.displayName = "BracketsSquareIconDuotone";
export { BracketsSquareIconDuotone };
