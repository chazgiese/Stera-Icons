import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlaskFilled = memo(
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
          d="M15 1a1 1 0 0 1 .102 1.995L15 3v5.853a3 3 0 0 0 .456 1.59l4.98 7.967c1.248 1.998-.188 4.59-2.544 4.59H6.109c-2.357 0-3.793-2.592-2.544-4.59l4.98-7.968A3 3 0 0 0 9 8.852V3l-.102-.005A1 1 0 0 1 9 1z"
        />
      </svg>
    ))
);
FlaskFilled.displayName = "FlaskFilled";
export { FlaskFilled };
