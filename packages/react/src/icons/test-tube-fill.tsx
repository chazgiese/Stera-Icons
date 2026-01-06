import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TestTubeIconFill = memo(
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
          d="M16.5 1a1 1 0 0 1 .102 1.995L16.5 3a.5.5 0 0 0-.5.5V19a4 4 0 0 1-8 0V3.5a.5.5 0 0 0-.5-.5 1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TestTubeIconFill.displayName = "TestTubeIconFill";
export { TestTubeIconFill };
