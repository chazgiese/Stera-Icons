import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationRightIconFillDuotone = memo(
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
          <path d="M16.95 5.636a1 1 0 0 1 1.414 0A9 9 0 0 1 13 20.943v-2.016A7 7 0 0 0 16.95 7.05a1 1 0 0 1 0-1.414M11 5.072A7 7 0 0 0 7.05 16.95a1 1 0 0 1-1.414 1.414A9 9 0 0 1 11 3.056z" />
        </g>
        <path
          fill="currentColor"
          d="M12.383 16.076a1 1 0 0 0-1.09.217l-3 3a1 1 0 0 0 0 1.414l3 3A1 1 0 0 0 13 23v-6a1 1 0 0 0-.617-.924M12.707.293A1 1 0 0 0 11 1v6a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414z"
        />
      </svg>
    ))
);
RotationRightIconFillDuotone.displayName = "RotationRightIconFillDuotone";
export { RotationRightIconFillDuotone };
