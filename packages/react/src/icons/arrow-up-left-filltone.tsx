import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftIconFilltone = memo(
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
          d="M9.293 9.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15 5a1 1 0 0 1 .707 1.707l-9 9A1 1 0 0 1 5 15V6a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ArrowUpLeftIconFilltone.displayName = "ArrowUpLeftIconFilltone";
export { ArrowUpLeftIconFilltone };
