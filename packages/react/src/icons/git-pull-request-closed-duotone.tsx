import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitPullRequestClosedIconDuotone = memo(
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
          <path d="M6.25 15.338a3.26 3.26 0 0 0-1.5 0V8.66q.361.087.75.089.389-.002.75-.089zM18.5 10.25a.75.75 0 0 1 .75.75v4.338a3.26 3.26 0 0 0-1.5 0V11a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M20.47 2.47a.75.75 0 1 1 1.06 1.06L19.56 5.5l1.97 1.97a.75.75 0 1 1-1.06 1.06L18.5 6.56l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06l1.97 1.97z"
        />
      </svg>
    ))
);
GitPullRequestClosedIconDuotone.displayName = "GitPullRequestClosedIconDuotone";
export { GitPullRequestClosedIconDuotone };
