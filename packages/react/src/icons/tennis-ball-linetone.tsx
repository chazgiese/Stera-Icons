import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIconLinetone = memo(
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
          <path d="M5.7 4.146A10.97 10.97 0 0 1 9 12a10.97 10.97 0 0 1-3.3 7.855l-1.4-1.428A8.97 8.97 0 0 0 7 12a8.97 8.97 0 0 0-2.7-6.428zM19.7 5.573a8.97 8.97 0 0 0-2.7 6.428 8.97 8.97 0 0 0 2.7 6.427l-1.4 1.428a10.97 10.97 0 0 1-3.3-7.855 10.97 10.97 0 0 1 3.3-7.855z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIconLinetone.displayName = "TennisBallIconLinetone";
export { TennisBallIconLinetone };
