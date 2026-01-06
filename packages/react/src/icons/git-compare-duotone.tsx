import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitCompareIconDuotone = memo(
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
          <path d="m19.75 16-.005.193A3.75 3.75 0 0 1 16 19.75h-3.19l-.75-.75.75-.75H16a2.25 2.25 0 0 0 2.238-2.02l.012-.23V8.161q.361.087.75.089.389-.002.75-.089zM11.94 5l-.75.75H8A2.25 2.25 0 0 0 5.75 8v7.838a3.26 3.26 0 0 0-1.5 0V8A3.75 3.75 0 0 1 8 4.25h3.19z" />
        </g>
        <path
          fill="currentColor"
          d="M13.47 15.47a.75.75 0 1 1 1.06 1.06L12.06 19l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 15.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M9.47 1.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L11.94 5 9.47 2.53a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 1.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitCompareIconDuotone.displayName = "GitCompareIconDuotone";
export { GitCompareIconDuotone };
