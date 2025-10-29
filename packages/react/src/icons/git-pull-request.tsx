import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitPullRequestIcon = memo(
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
          d="M5.5 2.25a3.25 3.25 0 0 1 .75 6.411v6.677a3.25 3.25 0 1 1-1.5 0V8.66A3.25 3.25 0 0 1 5.5 2.25m0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M13.97 1.97a.75.75 0 1 1 1.06 1.06l-1.72 1.72h2.19a3.75 3.75 0 0 1 3.75 3.75v6.838a3.25 3.25 0 1 1-1.5 0V8.5a2.25 2.25 0 0 0-2.25-2.25h-2.19l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06zm4.53 14.78a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitPullRequestIcon.displayName = "GitPullRequestIcon";
export { GitPullRequestIcon };
