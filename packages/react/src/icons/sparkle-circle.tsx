import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleCircleIcon = memo(
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
          d="M11.731 6.537a.3.3 0 0 1 .538 0l1.134 2.27a4 4 0 0 0 1.79 1.79l2.27 1.134a.3.3 0 0 1 0 .538l-2.27 1.134a4 4 0 0 0-1.79 1.79l-1.134 2.27a.3.3 0 0 1-.538 0l-1.134-2.27a4 4 0 0 0-1.79-1.79l-2.27-1.134a.3.3 0 0 1 0-.538l2.27-1.134a4 4 0 0 0 1.79-1.79z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparkleCircleIcon.displayName = "SparkleCircleIcon";
export { SparkleCircleIcon };
