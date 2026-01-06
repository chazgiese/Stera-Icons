import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorTextAltIconDuotone = memo(
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
          <path d="M12.75 18A3.25 3.25 0 0 0 16 21.25h1a.75.75 0 0 1 0 1.5h-1a4.75 4.75 0 0 1-4-2.19c.474-.74.75-1.617.75-2.56M12.75 11.25H15a.75.75 0 0 1 0 1.5h-2.25zM11.25 12.75H9a.75.75 0 0 1 0-1.5h2.25zM8 1.25c1.68 0 3.156.873 4 2.19A4.73 4.73 0 0 0 11.25 6 3.25 3.25 0 0 0 8 2.75H7a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M17 1.25a.75.75 0 0 1 0 1.5h-1A3.25 3.25 0 0 0 12.75 6v12A4.75 4.75 0 0 1 8 22.75H7a.75.75 0 0 1 0-1.5h1A3.25 3.25 0 0 0 11.25 18V6A4.75 4.75 0 0 1 16 1.25z"
        />
      </svg>
    ))
);
CursorTextAltIconDuotone.displayName = "CursorTextAltIconDuotone";
export { CursorTextAltIconDuotone };
