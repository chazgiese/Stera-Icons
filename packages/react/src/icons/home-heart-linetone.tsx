import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconLinetone = memo(
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
          d="M9.544 2.644a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 10.467V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.533A4 4 0 0 1 3.544 7.31zm3.683 1.578a2 2 0 0 0-2.454 0l-6 4.667A2 2 0 0 0 4 10.467V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.533a2 2 0 0 0-.773-1.578z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.904 9C15.605 9 17 10.369 17 12.076c0 1.24-.667 2.172-.877 2.464-1.057 1.466-2.54 2.481-3.502 3.243a1 1 0 0 1-1.242 0c-.961-.761-2.445-1.777-3.502-3.243-.21-.291-.877-1.224-.877-2.464C7 10.37 8.395 9 10.096 9c.718 0 1.379.245 1.904.653A3.1 3.1 0 0 1 13.904 9m0 2c-.445 0-.825.26-.997.632a1 1 0 0 1-1.814 0 1.1 1.1 0 0 0-.997-.632C9.482 11 9 11.49 9 12.076c0 .556.313 1.037.499 1.295.69.958 1.59 1.658 2.501 2.362.912-.704 1.81-1.404 2.501-2.362.186-.258.499-.739.499-1.295C15 11.49 14.518 11 13.904 11"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIconLinetone.displayName = "HomeHeartIconLinetone";
export { HomeHeartIconLinetone };
