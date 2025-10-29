import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowRightArrowIconFilltone = memo(
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
          d="m20.586 12-1 1h-8.687a5 5 0 0 0 0-2h8.687z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L20.586 12l-4.293-4.293a1 1 0 0 1 0-1.414M6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7"
        />
      </svg>
    ))
);
FlowRightArrowIconFilltone.displayName = "FlowRightArrowIconFilltone";
export { FlowRightArrowIconFilltone };
