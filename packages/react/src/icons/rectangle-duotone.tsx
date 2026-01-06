import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RectangleIconDuotone = memo(
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
          d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75h-6v-1.5h6A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75h-6v-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 4.75H6A3.25 3.25 0 0 0 2.75 8v8A3.25 3.25 0 0 0 6 19.25h6v1.5H6A4.75 4.75 0 0 1 1.25 16V8A4.75 4.75 0 0 1 6 3.25h6z"
        />
      </svg>
    ))
);
RectangleIconDuotone.displayName = "RectangleIconDuotone";
export { RectangleIconDuotone };
