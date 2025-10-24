import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownLeftIconLinetone = memo(
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
          d="M21 2a1 1 0 0 1 1 1v11a4 4 0 0 1-4 4H3a1 1 0 1 1 0-2h15a2 2 0 0 0 2-2V3a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M7.293 11.293a1 1 0 1 1 1.414 1.414L4.414 17l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5-.066-.073a1 1 0 0 1 .066-1.34z"
        />
      </svg>
    ))
);
ArrowCornerDownLeftIconLinetone.displayName = "ArrowCornerDownLeftIconLinetone";
export { ArrowCornerDownLeftIconLinetone };
