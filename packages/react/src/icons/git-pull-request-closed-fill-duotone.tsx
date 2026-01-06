import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitPullRequestClosedIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M6.5 15.146a3.5 3.5 0 0 0-2 0V8.854a3.5 3.5 0 0 0 2 0zM18.5 10a1 1 0 0 1 1 1v4.146a3.5 3.5 0 0 0-2 0V11a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M20.293 2.293a1 1 0 1 1 1.414 1.414L19.914 5.5l1.793 1.793a1 1 0 1 1-1.414 1.414L18.5 6.914l-1.793 1.793a1 1 0 1 1-1.414-1.414L17.086 5.5l-1.793-1.793a1 1 0 1 1 1.414-1.414L18.5 4.086z"
        />
      </svg>
    ))
);
GitPullRequestClosedIconFillDuotone.displayName =
  "GitPullRequestClosedIconFillDuotone";
export { GitPullRequestClosedIconFillDuotone };
