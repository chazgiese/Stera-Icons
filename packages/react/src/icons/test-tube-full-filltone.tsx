import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TestTubeFullIconFilltone = memo(
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
          d="M15 1a1 1 0 0 1 1 1v17a4 4 0 0 1-8 0V2a1 1 0 0 1 1-1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13 8a1 1 0 0 1 1 1v10a2 2 0 1 1-4 0V9a1 1 0 0 1 1-1zM16.5 1a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TestTubeFullIconFilltone.displayName = "TestTubeFullIconFilltone";
export { TestTubeFullIconFilltone };
