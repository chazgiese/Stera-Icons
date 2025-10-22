import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreCircleVIcon = memo(
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
          d="M13.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25 22.75 6.063 22.75 12m-1.5 0a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MoreCircleVIcon.displayName = "MoreCircleVIcon";
export { MoreCircleVIcon };
