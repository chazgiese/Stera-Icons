import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FrameIconFillDuotone = memo(
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
          fillRule="evenodd"
          d="M16 6.5A1.5 1.5 0 0 0 17.5 8H19v8h-1.5a1.5 1.5 0 0 0-1.5 1.5V19H8v-1.5a1.5 1.5 0 0 0-1.347-1.492L6.5 16H5V8h1.5a1.5 1.5 0 0 0 1.492-1.347L8 6.5V5h8zM8 16h8V8H8z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.653 16.008A1.5 1.5 0 0 1 8 17.5V21a1.5 1.5 0 0 1-3 0v-2H3a1.5 1.5 0 0 1 0-3h3.5zM21 16a1.5 1.5 0 0 1 0 3h-2v2a1.5 1.5 0 0 1-3 0v-3.5a1.5 1.5 0 0 1 1.5-1.5zM6.5 1.5A1.5 1.5 0 0 1 8 3v3.5l-.008.153A1.5 1.5 0 0 1 6.5 8H3a1.5 1.5 0 1 1 0-3h2V3a1.5 1.5 0 0 1 1.5-1.5M17.5 1.5A1.5 1.5 0 0 1 19 3v2h2a1.5 1.5 0 0 1 0 3h-3.5A1.5 1.5 0 0 1 16 6.5V3a1.5 1.5 0 0 1 1.5-1.5"
        />
      </svg>
    ))
);
FrameIconFillDuotone.displayName = "FrameIconFillDuotone";
export { FrameIconFillDuotone };
