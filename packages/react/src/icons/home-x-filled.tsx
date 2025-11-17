import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeXIconFilled = memo(
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
          d="M9.544 2.644a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 10.467V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.533c0-1.234.57-2.4 1.544-3.157zm5.663 7.65a1 1 0 0 0-1.414 0L12 12.085l-1.793-1.793a1 1 0 0 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414L12 14.914l1.793 1.793a1 1 0 0 0 1.414-1.414L13.414 13.5l1.793-1.793a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeXIconFilled.displayName = "HomeXIconFilled";
export { HomeXIconFilled };
