import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitBranchIconBold = memo(
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
          d="M18.5 2a3.5 3.5 0 0 1 1 6.854V9a4 4 0 0 1-4 4h-7a2 2 0 0 0-2 2v.146a3.501 3.501 0 1 1-2 0V8.854a3.5 3.5 0 1 1 2 0v2.682a4 4 0 0 1 2-.536h7a2 2 0 0 0 2-2v-.146A3.5 3.5 0 0 1 18.5 2m-13 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitBranchIconBold.displayName = "GitBranchIconBold";
export { GitBranchIconBold };
