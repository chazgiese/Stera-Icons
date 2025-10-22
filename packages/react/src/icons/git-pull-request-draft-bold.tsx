import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitPullRequestDraftIconBold = memo(
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
          d="M5.5 2a3.5 3.5 0 0 1 1 6.854v6.292a3.501 3.501 0 1 1-2 0V8.854A3.5 3.5 0 0 1 5.5 2m0 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.5 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
GitPullRequestDraftIconBold.displayName = "GitPullRequestDraftIconBold";
export { GitPullRequestDraftIconBold };
