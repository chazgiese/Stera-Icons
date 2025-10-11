import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitBranchIcon = memo(
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
          d="M18.5 2.25a3.25 3.25 0 0 1 .75 6.411V9a3.75 3.75 0 0 1-3.75 3.75h-7A2.25 2.25 0 0 0 6.25 15v.338a3.25 3.25 0 1 1-1.5 0V8.66a3.25 3.25 0 1 1 1.5 0V12a3.73 3.73 0 0 1 2.25-.749h7A2.25 2.25 0 0 0 17.75 9v-.339a3.25 3.25 0 0 1 .75-6.411m-13 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m13 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitBranchIcon.displayName = "GitBranchIcon";
export { GitBranchIcon };
