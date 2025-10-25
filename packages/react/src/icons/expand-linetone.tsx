import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandIconLinetone = memo(
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
          <path d="M8.293 14.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414-1.414zM14.293 14.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414M3.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414M19.293 3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M4 15a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M20 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1M8 3a1 1 0 0 1 0 2H5v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM20 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5h-3a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ExpandIconLinetone.displayName = "ExpandIconLinetone";
export { ExpandIconLinetone };
