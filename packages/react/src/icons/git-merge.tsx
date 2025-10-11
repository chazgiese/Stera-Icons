import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitMergeIcon = memo(
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
          d="M5.5 2.25a3.25 3.25 0 0 1 .814 6.396A3.25 3.25 0 0 0 9.5 11.25h5.838a3.25 3.25 0 1 1 0 1.5H9.5a4.73 4.73 0 0 1-3.25-1.29v3.878a3.25 3.25 0 1 1-1.5 0V8.66A3.25 3.25 0 0 1 5.5 2.25m0 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m13-6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-13-6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitMergeIcon.displayName = "GitMergeIcon";
export { GitMergeIcon };
