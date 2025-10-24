import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckCircleIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M16.293 8.293a1 1 0 1 1 1.414 1.414l-6.347 6.348c-.1.1-.22.22-.332.315-.12.101-.31.24-.572.314a1.5 1.5 0 0 1-1.005-.072 1.5 1.5 0 0 1-.52-.39c-.098-.11-.2-.247-.284-.36L6.2 12.6a1 1 0 1 1 1.6-1.2l2.308 3.078z"
        />
      </svg>
    ))
);
CheckCircleIconFilltone.displayName = "CheckCircleIconFilltone";
export { CheckCircleIconFilltone };
