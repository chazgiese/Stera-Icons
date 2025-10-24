import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownLeftIconFilltone = memo(
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
          d="M17.293 5.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 1 1-1.414-1.414z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M5.617 8.076a1 1 0 0 1 1.09.217l9 9A1 1 0 0 1 15 19H6a1 1 0 0 1-1-1V9a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ArrowDownLeftIconFilltone.displayName = "ArrowDownLeftIconFilltone";
export { ArrowDownLeftIconFilltone };
