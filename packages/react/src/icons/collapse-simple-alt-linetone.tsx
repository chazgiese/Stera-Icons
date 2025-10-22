import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIconLinetone = memo(
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
          <path d="M15.707 14.293a1 1 0 1 0-1.414 1.414l6 6a1 1 0 1 0 1.414-1.414zM3.707 2.293a1 1 0 1 0-1.414 1.414l6 6a1 1 0 1 0 1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M15 14a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-4h4a1 1 0 0 0 0-2zM9 3a1 1 0 0 0-1 1v4H4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"
        />
      </svg>
    ))
);
CollapseSimpleAltIconLinetone.displayName = "CollapseSimpleAltIconLinetone";
export { CollapseSimpleAltIconLinetone };
