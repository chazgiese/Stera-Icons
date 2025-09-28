import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeXFilled = memo(
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
          d="M8.93 3.12a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044c0-1.543.713-3 1.93-3.947zm6.277 7.173a1 1 0 0 0-1.414 0L12 12.086l-1.793-1.793a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414L12 14.914l1.793 1.793a1 1 0 1 0 1.414-1.415L13.414 13.5l1.793-1.793a1 1 0 0 0 0-1.415"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeXFilled.displayName = "HomeXFilled";
export { HomeXFilled };
