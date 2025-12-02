import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeSwordIconLinetone = memo(
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
          d="M2.294 2.294a1 1 0 0 1 .949-.263l4 1c.175.044.337.135.465.263L17 12.586 15.585 14 6.49 4.903l-2.115-.528.529 2.114L14 15.586 12.585 17 3.294 7.708a1 1 0 0 1-.222-.336l-.041-.13-1-4a1 1 0 0 1 .263-.948"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.293 11.293a1 1 0 1 1 1.414 1.414L18 14.414v2.172l2.04 2.04 1.22.406c.184.061.352.166.489.303l.281.281a1.25 1.25 0 0 1 0 1.768l-.646.646a1.25 1.25 0 0 1-1.673.086l-.095-.086-.281-.281a1.3 1.3 0 0 1-.248-.354l-.055-.135-.406-1.22-2.04-2.04h-2.172l-1.707 1.707a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
BladeSwordIconLinetone.displayName = "BladeSwordIconLinetone";
export { BladeSwordIconLinetone };
