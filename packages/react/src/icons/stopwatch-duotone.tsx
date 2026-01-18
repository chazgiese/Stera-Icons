import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StopwatchIconDuotone = memo(
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
          d="M12 4.25a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5m0 1.5a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.22 9.22a.75.75 0 1 1 1.06 1.06l-2.833 2.832q.051.187.053.388a1.5 1.5 0 1 1-1.113-1.448zM14 1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
StopwatchIconDuotone.displayName = "StopwatchIconDuotone";
export { StopwatchIconDuotone };
