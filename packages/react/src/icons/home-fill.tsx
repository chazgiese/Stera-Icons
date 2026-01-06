import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeIconFill = memo(
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
          d="M9.544 2.643a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 10.466V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.533c0-1.234.57-2.4 1.544-3.157zM11 11.499A1.5 1.5 0 0 0 9.5 13v4l.008.154A1.5 1.5 0 0 0 11 18.499h2a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeIconFill.displayName = "HomeIconFill";
export { HomeIconFill };
