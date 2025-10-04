import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownLeft = memo(
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
          d="M21 2.25a.75.75 0 0 1 .75.75v11A3.75 3.75 0 0 1 18 17.75H4.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5-.094-.114a1 1 0 0 1-.059-.107L2.3 17.26a1 1 0 0 1-.028-.091l-.01-.041-.005-.034a.76.76 0 0 1 .214-.625l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72H18A2.25 2.25 0 0 0 20.25 14V3a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ArrowCornerDownLeft.displayName = "ArrowCornerDownLeft";
export { ArrowCornerDownLeft };
