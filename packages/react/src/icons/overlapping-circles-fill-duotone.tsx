import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCirclesIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8.5 4.5c1.264 0 2.455.314 3.5.866a7.51 7.51 0 0 0-4 6.635 7.5 7.5 0 0 0 3.999 6.632A7.5 7.5 0 1 1 8.5 4.5M15.5 4.5a7.5 7.5 0 1 1-3.501 14.133 7.5 7.5 0 0 0 3.914-7.776A7.5 7.5 0 0 0 12 5.367a7.47 7.47 0 0 1 3.5-.867" />
        </g>
        <path
          fill="currentColor"
          d="M12 5.367a7.498 7.498 0 0 1 0 13.267 7.498 7.498 0 0 1 0-13.267"
        />
      </svg>
    ))
);
OverlappingCirclesIconFillDuotone.displayName =
  "OverlappingCirclesIconFillDuotone";
export { OverlappingCirclesIconFillDuotone };
