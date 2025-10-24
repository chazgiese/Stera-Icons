import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeXIconLinetone = memo(
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
          d="M8.93 3.12a5 5 0 0 1 6.14 0l5 3.89A5 5 0 0 1 22 10.955V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044a5 5 0 0 1 1.93-3.947zM13.843 4.7a3 3 0 0 0-3.684 0l-5 3.888A3 3 0 0 0 4 10.956V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.044c0-.926-.428-1.8-1.158-2.369z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M13.793 10.293a1 1 0 0 1 1.414 1.414L13.414 13.5l1.793 1.793a1 1 0 0 1-1.414 1.414L12 14.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.414-1.414L12 12.086z"
        />
      </svg>
    ))
);
HomeXIconLinetone.displayName = "HomeXIconLinetone";
export { HomeXIconLinetone };
