import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StopwatchIconFill = memo(
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
          d="M12 4.25a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5m4.457 4.793a1 1 0 0 0-1.414 0l-2.736 2.735a1.75 1.75 0 1 0 1.414 1.414l2.736-2.735a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M14 1a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
      </svg>
    ))
);
StopwatchIconFill.displayName = "StopwatchIconFill";
export { StopwatchIconFill };
