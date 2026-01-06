import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeKunaiIconFillDuotone = memo(
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
        <path
          fill="currentColor"
          d="M11.793 7.793a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414M20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="m14.666 12.08-.68 4.084c-.05.303-.238.567-.507.714l-11 6a1 1 0 0 1-1.357-1.357l6-11 .06-.097a1 1 0 0 1 .654-.41l4.083-.681zM17.295 5.29c.296.619.795 1.12 1.413 1.415L15.414 10 14 8.586z" />
        </g>
      </svg>
    ))
);
BladeKunaiIconFillDuotone.displayName = "BladeKunaiIconFillDuotone";
export { BladeKunaiIconFillDuotone };
