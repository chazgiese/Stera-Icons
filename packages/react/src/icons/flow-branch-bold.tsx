import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowBranchBold = memo(
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
          d="M13.793 13.793a1 1 0 0 1 1.414 0L20 18.586V16a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-4.793-4.793a1 1 0 0 1 0-1.414M21 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5.414l-5.535 5.536A7 7 0 0 1 9.515 13H2a1 1 0 1 1 0-2h7.515a5 5 0 0 0 3.535-1.465L18.586 4H16a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
FlowBranchBold.displayName = "FlowBranchBold";
export { FlowBranchBold };
