import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsLeftRightIconFilltone = memo(
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
          <path d="M20.5 16.5a1 1 0 1 1 0 2h-13v-2zM16.5 8.5h-13a1 1 0 0 1 0-2h13z" />
        </g>
        <path
          fill="currentColor"
          d="M5.793 12.793A1 1 0 0 1 7.5 13.5v8a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1-.068-1.338l.068-.076zM17.117 2.576a1 1 0 0 1 1.09.217l4 4 .067.073a1 1 0 0 1-.067 1.34l-4 4A1 1 0 0 1 16.5 11.5v-8a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ArrowsLeftRightIconFilltone.displayName = "ArrowsLeftRightIconFilltone";
export { ArrowsLeftRightIconFilltone };
