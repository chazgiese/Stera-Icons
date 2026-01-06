import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapIconFill = memo(
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
          d="m7.165 17.84-4.621 2.999A1 1 0 0 1 1 20V8l.008-.126a1 1 0 0 1 .448-.713l5.709-3.705zM14.835 6.35v14.257l-5.67-2.958V3.393zM21.456 3.161A1 1 0 0 1 23 4v12a1 1 0 0 1-.456.839l-5.709 3.704V6.158z"
        />
      </svg>
    ))
);
MapIconFill.displayName = "MapIconFill";
export { MapIconFill };
