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
          fillRule="evenodd"
          d="M2.293 2.294a1 1 0 0 1 .95-.263l4 1c.175.044.336.135.464.263l10 10a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.338.068l-.076-.068-10-10a1 1 0 0 1-.221-.336l-.041-.13-1-4a1 1 0 0 1 .262-.948m2.61 4.195L14 15.587 15.586 14 6.49 4.903l-2.116-.528z"
          clipRule="evenodd"
          opacity={0.32}
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
