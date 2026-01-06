import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownLeftIconBoldDuotone = memo(
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
          d="M7.293 9.293a1 1 0 1 1 1.414 1.414L4.414 15l4.293 4.293a1 1 0 1 1-1.414 1.414l-5-5-.066-.073a1 1 0 0 1 .066-1.34z"
        />
        <path
          fill="currentColor"
          d="M21 3a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H5.414l-1-1 1-1H18a2 2 0 0 0 2-2V4a1 1 0 0 1 1-1"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowCornerDownLeftIconBoldDuotone.displayName =
  "ArrowCornerDownLeftIconBoldDuotone";
export { ArrowCornerDownLeftIconBoldDuotone };
