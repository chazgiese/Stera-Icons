import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TogglesIconFilltone = memo(
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
          <path
            fillRule="evenodd"
            d="M16 12.75a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-8 2a3 3 0 1 0 0 6h8a3 3 0 1 0 0-6z"
            clipRule="evenodd"
          />
          <path d="M16 1.25a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10z" />
        </g>
        <path
          fill="currentColor"
          d="M8 15.75a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16 4.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
TogglesIconFilltone.displayName = "TogglesIconFilltone";
export { TogglesIconFilltone };
