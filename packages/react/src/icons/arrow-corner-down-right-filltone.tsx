import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightIconFilltone = memo(
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
          d="M3 2a1 1 0 0 1 1 1v11a2 2 0 0 0 2 2h15a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4V3a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M15.617 11.076a1 1 0 0 1 1.09.217l5 5a1 1 0 0 1 .066 1.34l-.066.074-5 5A1 1 0 0 1 15 22V12a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ArrowCornerDownRightIconFilltone.displayName =
  "ArrowCornerDownRightIconFilltone";
export { ArrowCornerDownRightIconFilltone };
