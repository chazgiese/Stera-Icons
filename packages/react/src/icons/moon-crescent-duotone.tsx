import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonCrescentIconDuotone = memo(
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
          d="M8.441 2.082a.751.751 0 0 1 1.334.687 9.25 9.25 0 0 0 10.898 13.086.75.75 0 0 1 .434 1.436A10.8 10.8 0 0 1 18 17.75C12.063 17.75 7.25 12.937 7.25 7c0-1.772.432-3.444 1.191-4.918"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8.871 1.714a.75.75 0 0 0-.43.368q-.421.817-.702 1.708A9.25 9.25 0 0 0 12 21.25c2.971 0 5.611-1.402 7.304-3.581q.93-.114 1.804-.378a.75.75 0 0 0 .45-.374A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12c0-4.85 3.211-8.946 7.621-10.286M8.888 1.709l.078-.02a1 1 0 0 1-.078.02"
        />
      </svg>
    ))
);
MoonCrescentIconDuotone.displayName = "MoonCrescentIconDuotone";
export { MoonCrescentIconDuotone };
