import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIconFilltone = memo(
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
          d="M21.383 15.076a1 1 0 0 0-1.09.217l-5 5A1 1 0 0 0 16 22h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-.617-.924M3 2a1 1 0 0 0-1 1v5a1 1 0 0 0 1.707.707l5-5A1 1 0 0 0 8 2z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconFilltone.displayName = "ExpandSimpleAltIconFilltone";
export { ExpandSimpleAltIconFilltone };
