import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitCompareIconBoldDuotone = memo(
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
          <path d="M20 16a4 4 0 0 1-4 4h-2.586l-1-1 1-1H16a2 2 0 0 0 2-2V8.354a3.5 3.5 0 0 0 2 0zM11.586 5l-1 1H8a2 2 0 0 0-2 2v7.646a3.5 3.5 0 0 0-2 0V8a4 4 0 0 1 4-4h2.586z" />
        </g>
        <path
          fill="currentColor"
          d="M13.293 15.293a1 1 0 1 1 1.414 1.414L12.414 19l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 15.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M9.293 1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L11.586 5 9.293 2.707a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitCompareIconBoldDuotone.displayName = "GitCompareIconBoldDuotone";
export { GitCompareIconBoldDuotone };
