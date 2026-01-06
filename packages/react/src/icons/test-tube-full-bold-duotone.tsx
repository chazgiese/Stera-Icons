import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TestTubeFullIconBoldDuotone = memo(
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
          d="M16 19a4 4 0 0 1-8 0V3h2v16a2 2 0 1 0 4 0V3h2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14 10.219c-1.31.35-2.69.35-4 0V8.12c1.29.48 2.71.48 4 0zM16.5 1a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TestTubeFullIconBoldDuotone.displayName = "TestTubeFullIconBoldDuotone";
export { TestTubeFullIconBoldDuotone };
