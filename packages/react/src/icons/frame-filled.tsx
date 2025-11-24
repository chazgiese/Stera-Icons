import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FrameIconFilled = memo(
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
          d="M17.5 1.5A1.5 1.5 0 0 1 19 3v2h2a1.5 1.5 0 0 1 0 3h-2v8h2a1.5 1.5 0 0 1 0 3h-2v2a1.5 1.5 0 0 1-3 0v-2H8v2a1.5 1.5 0 0 1-3 0v-2H3a1.5 1.5 0 0 1 0-3h2V8H3a1.5 1.5 0 1 1 0-3h2V3a1.5 1.5 0 1 1 3 0v2h8V3a1.5 1.5 0 0 1 1.5-1.5M8 16h8V8H8z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FrameIconFilled.displayName = "FrameIconFilled";
export { FrameIconFilled };
