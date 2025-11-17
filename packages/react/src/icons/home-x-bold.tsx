import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeXIconBold = memo(
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
          d="M13.793 10.293a1 1 0 1 1 1.414 1.414L13.414 13.5l1.793 1.793a1 1 0 0 1-1.414 1.414L12 14.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 1.414-1.414L12 12.086z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.544 2.644a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 10.467V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.533A4 4 0 0 1 3.544 7.31zm3.683 1.578a2 2 0 0 0-2.454 0l-6 4.667A2 2 0 0 0 4 10.467V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.533a2 2 0 0 0-.773-1.578z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeXIconBold.displayName = "HomeXIconBold";
export { HomeXIconBold };
