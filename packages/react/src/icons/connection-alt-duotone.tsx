import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ConnectionAltIconDuotone = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.4}
        >
          <path d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" />
        </g>
        <path
          fill="currentColor"
          d="M6.5 2A4.5 4.5 0 0 1 11 6.5c0 4.596 1.904 6.5 6.5 6.5a4.5 4.5 0 1 1-4.5 4.5c0-4.596-1.904-6.5-6.5-6.5a4.5 4.5 0 0 1 0-9m11 12.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-11-11a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        />
      </svg>
    ))
);
ConnectionAltIconDuotone.displayName = "ConnectionAltIconDuotone";
export { ConnectionAltIconDuotone };
