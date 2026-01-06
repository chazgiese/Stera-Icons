import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIconBoldDuotone = memo(
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
          <path d="M16 16v1.414l4.293 4.293a1 1 0 0 0 1.414-1.414L17.414 16zM3.707 2.293a1 1 0 1 0-1.414 1.414L6.586 8H8V6.586z" />
        </g>
        <path
          fill="currentColor"
          d="M15 14a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2zM9 3a1 1 0 0 0-1 1v4H4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"
        />
      </svg>
    ))
);
CollapseSimpleAltIconBoldDuotone.displayName =
  "CollapseSimpleAltIconBoldDuotone";
export { CollapseSimpleAltIconBoldDuotone };
