import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoundingBoxIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M17 20H7v-2h10zM6 17H4V7h2zM20 17h-2V7h2zM17 6H7V4h10z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm-3 4h2v-2H4zM21 16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm-3 4h2v-2h-2zM7 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM4 6h2V4H4zM21 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 4h2V4h-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BoundingBoxIconLinetone.displayName = "BoundingBoxIconLinetone";
export { BoundingBoxIconLinetone };
