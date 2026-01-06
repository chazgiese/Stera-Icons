import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeKunaiIconFill = memo(
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
          d="M20 1a3 3 0 0 1 0 6c-.463 0-.9-.109-1.291-.296L15.413 10l.794.794a1 1 0 1 1-1.414 1.414l-.127-.127-.68 4.084c-.05.303-.238.567-.507.714l-11 6a1 1 0 0 1-1.357-1.357l6-11 .06-.097a1 1 0 0 1 .654-.41l4.083-.681-.126-.126a1 1 0 1 1 1.414-1.414l.792.792 3.296-3.295A3 3 0 0 1 17 4a3 3 0 0 1 3-3"
        />
      </svg>
    ))
);
BladeKunaiIconFill.displayName = "BladeKunaiIconFill";
export { BladeKunaiIconFill };
