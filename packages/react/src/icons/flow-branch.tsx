import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowBranchIcon = memo(
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
          d="M13.97 13.97a.75.75 0 0 1 1.06 0l5.22 5.22V16a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h3.19l-5.22-5.22a.75.75 0 0 1 0-1.06M21 2.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4.81l-5.962 5.963a6.75 6.75 0 0 1-4.773 1.977H2a.75.75 0 0 1 0-1.5h7.515a5.25 5.25 0 0 0 3.712-1.538l5.962-5.962H16a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
FlowBranchIcon.displayName = "FlowBranchIcon";
export { FlowBranchIcon };
