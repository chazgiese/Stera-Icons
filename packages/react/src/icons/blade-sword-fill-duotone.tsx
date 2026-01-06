import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeSwordIconFillDuotone = memo(
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
          d="M2.47 2.47a.75.75 0 0 1 .712-.197l4 1a.75.75 0 0 1 .348.197l9.293 9.293-4.06 4.06L3.47 7.53a.8.8 0 0 1-.166-.252l-.031-.096-1-4a.75.75 0 0 1 .197-.712"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.293 11.293a1 1 0 1 1 1.414 1.414L18 14.414v2.172l2.04 2.04 1.22.406c.184.061.352.166.49.303l.28.281a1.25 1.25 0 0 1 0 1.768l-.646.646a1.25 1.25 0 0 1-1.673.086l-.095-.086-.281-.281a1.3 1.3 0 0 1-.248-.354l-.055-.135-.406-1.22-2.04-2.04h-2.172l-1.707 1.707a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
BladeSwordIconFillDuotone.displayName = "BladeSwordIconFillDuotone";
export { BladeSwordIconFillDuotone };
