import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitBranchIconFilltone = memo(
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
          d="M19.5 9a4 4 0 0 1-4 4h-7a2 2 0 0 0-2 2v.146a3.5 3.5 0 0 0-2 0V8.854a3.5 3.5 0 0 0 2 0v2.682a4 4 0 0 1 2-.536h7a2 2 0 0 0 2-2v-.146a3.5 3.5 0 0 0 2 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
GitBranchIconFilltone.displayName = "GitBranchIconFilltone";
export { GitBranchIconFilltone };
