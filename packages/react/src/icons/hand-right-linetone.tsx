import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandRightIconLinetone = memo(
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
          d="M20.002 13a1 1 0 0 1 1 1 9 9 0 0 1-17.878 1.487 1 1 0 0 1 1.973-.329A7 7 0 0 0 19.002 14a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M14 1a3 3 0 0 1 3 3v.174A2.994 2.994 0 0 1 21 7v7a1 1 0 1 1-2 0V7a1 1 0 1 0-2 0v4.5a1 1 0 1 1-2 0V4a1 1 0 1 0-2 0v7a1 1 0 1 1-2 0V5a1 1 0 1 0-2 0v8a1 1 0 0 1-1.86.509l-1.65-2.794-.004-.008a.997.997 0 0 0-1.366-.366 1 1 0 0 0-.413 1.274l.047.092.065.135 1.221 3.116a1 1 0 1 1-1.86.73l-1.201-3.06A3 3 0 0 1 7 9.382V5a3 3 0 0 1 4.473-2.612A3 3 0 0 1 14 1"
        />
      </svg>
    ))
);
HandRightIconLinetone.displayName = "HandRightIconLinetone";
export { HandRightIconLinetone };
