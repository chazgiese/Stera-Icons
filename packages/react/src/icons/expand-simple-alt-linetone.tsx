import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIconLinetone = memo(
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
          <path d="M14.293 14.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414M2.293 2.293a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414" />
        </g>
        <path
          fill="currentColor"
          d="M21 14a1 1 0 0 1 1 1v6a1 1 0 0 1-.898.995L21 22h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1M9 2a1 1 0 0 1 0 2H4v5a1 1 0 0 1-2 0V3a1 1 0 0 1 .897-.995L3 2z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconLinetone.displayName = "ExpandSimpleAltIconLinetone";
export { ExpandSimpleAltIconLinetone };
