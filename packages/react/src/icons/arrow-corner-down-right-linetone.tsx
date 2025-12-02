import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightIconLinetone = memo(
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
          d="M3 2a1 1 0 0 1 1 1v11a2 2 0 0 0 2 2h12.586l1 1-1 1H6a4 4 0 0 1-4-4V3a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.293 11.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 .066 1.341l-.066.073-5 5a1 1 0 0 1-1.414-1.414L19.586 17l-4.293-4.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowCornerDownRightIconLinetone.displayName =
  "ArrowCornerDownRightIconLinetone";
export { ArrowCornerDownRightIconLinetone };
