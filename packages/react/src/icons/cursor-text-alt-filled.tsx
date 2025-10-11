import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorTextAltIconFilled = memo(
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
          d="M8 1c1.576 0 2.997.664 4 1.727A5.48 5.48 0 0 1 16 1h1a1.5 1.5 0 0 1 0 3h-1a2.5 2.5 0 0 0-2.5 2.5v4H15a1.5 1.5 0 0 1 0 3h-1.5v4A2.5 2.5 0 0 0 16 20h1a1.5 1.5 0 0 1 0 3h-1a5.48 5.48 0 0 1-4-1.727A5.48 5.48 0 0 1 8 23H7a1.5 1.5 0 0 1 0-3h1a2.5 2.5 0 0 0 2.5-2.5v-4H9a1.5 1.5 0 0 1 0-3h1.5v-4A2.5 2.5 0 0 0 8 4H7a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
CursorTextAltIconFilled.displayName = "CursorTextAltIconFilled";
export { CursorTextAltIconFilled };
