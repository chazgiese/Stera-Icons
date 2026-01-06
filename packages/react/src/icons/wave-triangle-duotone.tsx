import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveTriangleIconDuotone = memo(
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
          d="M21.338 11.649a.75.75 0 1 1 1.324.703l-3.895 7.333c-.752 1.415-2.781 1.415-3.534 0l-3.895-7.333 1.324-.703 3.897 7.332a.5.5 0 0 0 .882 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.234 4.312c.752-1.415 2.78-1.415 3.533 0l3.895 7.336-1.324.703-3.896-7.335a.5.5 0 0 0-.883 0l-3.897 7.335a.75.75 0 1 1-1.324-.703z"
        />
      </svg>
    ))
);
WaveTriangleIconDuotone.displayName = "WaveTriangleIconDuotone";
export { WaveTriangleIconDuotone };
