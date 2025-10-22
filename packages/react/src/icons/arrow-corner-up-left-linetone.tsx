import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpLeftIconLinetone = memo(
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
          d="M18 6a4 4 0 0 1 4 4v11a1 1 0 1 1-2 0V10a2 2 0 0 0-2-2H3a1 1 0 0 1 0-2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M7.293 1.293a1 1 0 1 1 1.414 1.414L4.414 7l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1-.066-1.34l.066-.074z"
        />
      </svg>
    ))
);
ArrowCornerUpLeftIconLinetone.displayName = "ArrowCornerUpLeftIconLinetone";
export { ArrowCornerUpLeftIconLinetone };
