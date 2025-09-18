import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCircles = memo(
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
          d="M15.5 4.75a7.25 7.25 0 1 1-3.5 13.6 7.25 7.25 0 1 1 0-12.7 7.2 7.2 0 0 1 3.5-.9m-7 1.5a5.75 5.75 0 1 0 2.107 11.099A7.23 7.23 0 0 1 8.25 12a7.23 7.23 0 0 1 2.357-5.35 5.7 5.7 0 0 0-2.107-.4m7 0c-.745 0-1.455.143-2.108.4A7.23 7.23 0 0 1 15.75 12c0 2.118-.91 4.023-2.358 5.349A5.75 5.75 0 1 0 15.5 6.25M12 7.44A5.74 5.74 0 0 0 9.75 12c0 1.858.883 3.508 2.25 4.56A5.74 5.74 0 0 0 14.25 12 5.74 5.74 0 0 0 12 7.44"
          clipRule="evenodd"
        />
      </svg>
    ))
);
OverlappingCircles.displayName = "OverlappingCircles";
export { OverlappingCircles };
