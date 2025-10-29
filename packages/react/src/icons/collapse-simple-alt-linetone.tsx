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
        <g fill="currentColor" opacity={0.4}>
          <path d="M21.707 20.293a1 1 0 0 1-1.414 1.414L16 17.414V16h1.414zM2.293 2.293a1 1 0 0 1 1.414 0L8 6.586V8H6.586L2.293 3.707a1 1 0 0 1 0-1.414" />
        </g>
        <path
          fill="currentColor"
          d="M21 14a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-6a1 1 0 0 1 .898-.995L15 14zM9 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CollapseSimpleAltIconLinetone.displayName = "CollapseSimpleAltIconLinetone";
export { CollapseSimpleAltIconLinetone };
