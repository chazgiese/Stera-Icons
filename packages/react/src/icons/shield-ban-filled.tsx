import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldBanIconFilled = memo(
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
          d="M18.272 18.55a13 13 0 0 1-4.458 3.66l-1.367.684a1 1 0 0 1-.894 0l-1.367-.683A13 13 0 0 1 3 10.584V5.459zM11.734 1.036c.203-.056.42-.047.618.027l8 3A1 1 0 0 1 21 5v5.584c0 2.24-.578 4.392-1.621 6.28L4.2 3.855l7.448-2.792z"
        />
      </svg>
    ))
);
ShieldBanIconFilled.displayName = "ShieldBanIconFilled";
export { ShieldBanIconFilled };
