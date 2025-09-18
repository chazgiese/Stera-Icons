import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitPullRequestClosed = memo(
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
          d="M5.5 2.25a3.25 3.25 0 0 1 .75 6.411v6.677a3.25 3.25 0 1 1-1.5 0V8.66A3.25 3.25 0 0 1 5.5 2.25m0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 10.25a.75.75 0 0 1 .75.75v4.338a3.25 3.25 0 1 1-1.5 0V11a.75.75 0 0 1 .75-.75m0 6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M20.47 2.47a.75.75 0 1 1 1.06 1.06L19.56 5.5l1.97 1.97a.75.75 0 1 1-1.06 1.06L18.5 6.56l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97z"
        />
      </svg>
    ))
);
GitPullRequestClosed.displayName = "GitPullRequestClosed";
export { GitPullRequestClosed };
