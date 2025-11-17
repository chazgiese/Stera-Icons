import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeSimpleIconLinetone = memo(
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
          d="M13.228 4.222a2 2 0 0 0-2.455 0l-6 4.667A2 2 0 0 0 4 10.467V18a2 2 0 0 0 2 2h2a1 1 0 1 0 0 2H6a4 4 0 0 1-4-4v-7.533A4 4 0 0 1 3.544 7.31l6-4.666a4 4 0 0 1 4.912 0l6 4.666A4 4 0 0 1 22 10.467V18a4 4 0 0 1-4 4h-2a1 1 0 0 0 0-2h2a2 2 0 0 0 2-2v-7.533a2 2 0 0 0-.773-1.578z"
          opacity={0.4}
        />
        <path fill="currentColor" d="M16 20a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
HomeSimpleIconLinetone.displayName = "HomeSimpleIconLinetone";
export { HomeSimpleIconLinetone };
