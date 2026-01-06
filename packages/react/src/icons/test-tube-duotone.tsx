import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TestTubeIconDuotone = memo(
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
          d="M15.75 19a3.75 3.75 0 1 1-7.5 0V2.75h1.5V19a2.25 2.25 0 0 0 4.5 0V2.75h1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.5 1.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
TestTubeIconDuotone.displayName = "TestTubeIconDuotone";
export { TestTubeIconDuotone };
