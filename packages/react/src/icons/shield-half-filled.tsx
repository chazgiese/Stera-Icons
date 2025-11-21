import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldHalfIconFilled = memo(
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
          d="m11 22.617-.813-.406A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .648-.937L11 1.307zM20.352 4.063A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-.813.406V1.307z"
        />
      </svg>
    ))
);
ShieldHalfIconFilled.displayName = "ShieldHalfIconFilled";
export { ShieldHalfIconFilled };
