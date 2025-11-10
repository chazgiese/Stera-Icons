import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeDeciduousIconFilltone = memo(
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
          d="M12 1.25a3.75 3.75 0 0 1 3.675 3.004A4.25 4.25 0 0 1 19.75 8.5a4.23 4.23 0 0 1-.945 2.668A4.75 4.75 0 0 1 16 19.75H8a4.75 4.75 0 0 1-2.806-8.582 4.25 4.25 0 0 1 3.13-6.914A3.75 3.75 0 0 1 12 1.25"
          opacity={0.4}
        />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2.25h2z" />
      </svg>
    ))
);
TreeDeciduousIconFilltone.displayName = "TreeDeciduousIconFilltone";
export { TreeDeciduousIconFilltone };
