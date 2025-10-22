import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineRightIconFilltone = memo(
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
          d="M21 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M11.436 5.373c-.807-.806-2.186-.234-2.186.905V11H3a1 1 0 0 0 0 2h6.25v4.72c0 1.141 1.38 1.712 2.185.906l5.72-5.72c.5-.5.5-1.311 0-1.811z"
        />
      </svg>
    ))
);
ArrowLineRightIconFilltone.displayName = "ArrowLineRightIconFilltone";
export { ArrowLineRightIconFilltone };
