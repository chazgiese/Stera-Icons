import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TestTubeIcon = memo(
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
          fillRule="evenodd"
          d="M16.5 1.25a.75.75 0 0 1 .077 1.496l-.154.008a.75.75 0 0 0-.673.746V19a3.75 3.75 0 1 1-7.5 0V3.5a.75.75 0 0 0-.673-.746l-.154-.008A.75.75 0 0 1 7.5 1.25zM9.75 19a2.25 2.25 0 0 0 4.5 0V2.75h-4.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TestTubeIcon.displayName = "TestTubeIcon";
export { TestTubeIcon };
