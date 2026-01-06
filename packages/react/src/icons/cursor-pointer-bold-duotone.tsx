import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorPointerIconBoldDuotone = memo(
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
          d="M20.988 14.463a9 9 0 0 1-17.846 1.132l.037.092a1 1 0 0 0 1.917-.521A7 7 0 0 0 19 14l.005.102A1 1 0 0 0 21 14z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10 1a3 3 0 0 1 3 3v2.174a2.996 2.996 0 0 1 3.527 1.214A3 3 0 0 1 21 10v4a1 1 0 1 1-2 0v-4a1 1 0 1 0-2 0v1.5a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v2a1 1 0 1 1-2 0V4a1 1 0 1 0-2 0v9a1 1 0 0 1-1.86.509l-1.65-2.794-.005-.008a.997.997 0 0 0-1.366-.366 1 1 0 0 0-.413 1.274l.047.092.065.135 1.221 3.116a1 1 0 1 1-1.86.73l-1.201-3.06a3 3 0 0 1 5.021-3.246V4a3 3 0 0 1 3-3"
        />
      </svg>
    ))
);
CursorPointerIconBoldDuotone.displayName = "CursorPointerIconBoldDuotone";
export { CursorPointerIconBoldDuotone };
