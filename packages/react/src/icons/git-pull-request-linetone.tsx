import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitPullRequestIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M5.5 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M15.5 4.5a4 4 0 0 1 4 4V16a1 1 0 1 1-2 0V8.5a2 2 0 0 0-2-2H12a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13.793 1.793a1 1 0 1 1 1.414 1.414L12.914 5.5l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitPullRequestIconLinetone.displayName = "GitPullRequestIconLinetone";
export { GitPullRequestIconLinetone };
