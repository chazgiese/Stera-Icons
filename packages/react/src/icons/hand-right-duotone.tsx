import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandRightIconDuotone = memo(
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
          d="M14 1.25A2.75 2.75 0 0 1 16.75 4v.553a2.75 2.75 0 0 1 4 2.447v7a.75.75 0 0 1-1.5 0V7a1.25 1.25 0 0 0-2.5 0v4.5a.75.75 0 0 1-1.5 0V4a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-1.5 0V5a1.25 1.25 0 0 0-2.5 0v8a.75.75 0 0 1-1.395.38l-1.648-2.792-.004-.006a1.247 1.247 0 0 0-1.708-.458 1.25 1.25 0 0 0-.516 1.594l.059.114.048.1 1.222 3.117a.75.75 0 0 1-1.396.548l-1.21-3.09a2.747 2.747 0 0 1 4.796-2.682l.252.428V5a2.75 2.75 0 0 1 4.31-2.265A2.75 2.75 0 0 1 14 1.25"
        />
        <path
          fill="currentColor"
          d="M20.752 14a8.75 8.75 0 0 1-17.366 1.53l.026.067a.75.75 0 1 0 1.439-.397 7.25 7.25 0 0 0 14.4-1.189.75.75 0 0 0 1.501-.011l-.001-.02z"
          opacity={0.4}
        />
      </svg>
    ))
);
HandRightIconDuotone.displayName = "HandRightIconDuotone";
export { HandRightIconDuotone };
