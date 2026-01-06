import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCirclesIconFill = memo(
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
          d="M8.5 4.5c1.264 0 2.455.314 3.5.866a7.498 7.498 0 0 0 0 13.267A7.5 7.5 0 1 1 8.5 4.5M15.5 4.5A7.5 7.5 0 1 1 12 18.633a7.498 7.498 0 0 0 0-13.267 7.47 7.47 0 0 1 3.5-.866"
        />
      </svg>
    ))
);
OverlappingCirclesIconFill.displayName = "OverlappingCirclesIconFill";
export { OverlappingCirclesIconFill };
