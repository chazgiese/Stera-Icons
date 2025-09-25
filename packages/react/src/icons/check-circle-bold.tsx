import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckCircleBold = memo(
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
          d="M16.293 8.293a1 1 0 1 1 1.414 1.414l-6.348 6.348c-.1.1-.22.22-.332.315-.12.101-.309.24-.57.314a1.5 1.5 0 0 1-1.006-.072 1.5 1.5 0 0 1-.52-.39c-.098-.11-.2-.247-.285-.36L6.2 12.6a1 1 0 1 1 1.6-1.2l2.307 3.077z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CheckCircleBold.displayName = "CheckCircleBold";
export { CheckCircleBold };
