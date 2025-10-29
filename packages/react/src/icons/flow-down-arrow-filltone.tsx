import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowDownArrowIconFilltone = memo(
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
          d="m13 19.586-1 1-1-1v-8.687a5 5 0 0 0 2 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.293 16.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L12 20.586zM12 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
        />
      </svg>
    ))
);
FlowDownArrowIconFilltone.displayName = "FlowDownArrowIconFilltone";
export { FlowDownArrowIconFilltone };
