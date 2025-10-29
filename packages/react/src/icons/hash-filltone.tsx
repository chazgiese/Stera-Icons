import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashIconFilltone = memo(
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
          <path d="M10.5 20.5a1.5 1.5 0 0 1-3 0v-4h3zM16.5 20.5a1.5 1.5 0 0 1-3 0v-4h3zM10.5 13.5h-3v-3h3zM16.5 13.5h-3v-3h3zM9 2a1.5 1.5 0 0 1 1.5 1.5v4h-3v-4A1.5 1.5 0 0 1 9 2M15 2a1.5 1.5 0 0 1 1.5 1.5v4h-3v-4A1.5 1.5 0 0 1 15 2" />
        </g>
        <path
          fill="currentColor"
          d="M20.5 13.5a1.5 1.5 0 0 1 0 3h-17a1.5 1.5 0 0 1 0-3zM20.5 7.5a1.5 1.5 0 0 1 0 3h-17a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
HashIconFilltone.displayName = "HashIconFilltone";
export { HashIconFilltone };
