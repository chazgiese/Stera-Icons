import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorTextAltIcon = memo(
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
          d="M8 1.25c1.68 0 3.156.873 4 2.19a4.75 4.75 0 0 1 4-2.19h1a.75.75 0 0 1 0 1.5h-1A3.25 3.25 0 0 0 12.75 6v5.25H15a.75.75 0 0 1 0 1.5h-2.25V18A3.25 3.25 0 0 0 16 21.25h1a.75.75 0 0 1 0 1.5h-1a4.75 4.75 0 0 1-4-2.19 4.75 4.75 0 0 1-4 2.19H7a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 0 11.25 18v-5.25H9a.75.75 0 0 1 0-1.5h2.25V6A3.25 3.25 0 0 0 8 2.75H7a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
CursorTextAltIcon.displayName = "CursorTextAltIcon";
export { CursorTextAltIcon };
