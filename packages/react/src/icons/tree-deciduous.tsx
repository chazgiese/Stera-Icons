import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeDeciduousIcon = memo(
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
          d="M12 1.25a3.75 3.75 0 0 1 3.675 3.004A4.25 4.25 0 0 1 19.75 8.5a4.23 4.23 0 0 1-.945 2.668A4.75 4.75 0 0 1 16 19.75h-3V22a1 1 0 1 1-2 0v-2.25H8a4.75 4.75 0 0 1-2.806-8.582 4.25 4.25 0 0 1 3.13-6.914A3.75 3.75 0 0 1 12 1.25m0 1.5A2.25 2.25 0 0 0 9.75 5v.031a.75.75 0 0 1-.856.747 2.75 2.75 0 0 0-2.021 4.938.75.75 0 0 1-.15 1.295A3.251 3.251 0 0 0 8 18.25h8a3.25 3.25 0 0 0 1.277-6.24.75.75 0 0 1-.15-1.293 2.75 2.75 0 0 0-2.021-4.938.75.75 0 0 1-.856-.748V5A2.25 2.25 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TreeDeciduousIcon.displayName = "TreeDeciduousIcon";
export { TreeDeciduousIcon };
