import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeSwordIconBold = memo(
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
          d="M2.294 2.293a1 1 0 0 1 .949-.262l4 1c.175.044.337.134.465.262L17 12.586l1.293-1.293a1 1 0 1 1 1.414 1.414L18 14.414v2.172l2.04 2.041 1.22.406c.183.061.352.165.489.302l.28.282a1.25 1.25 0 0 1 0 1.767l-.646.647a1.25 1.25 0 0 1-1.672.086l-.095-.086-.282-.282a1.3 1.3 0 0 1-.248-.354l-.054-.135-.406-1.219-2.04-2.04h-2.172l-1.707 1.706a1 1 0 0 1-1.414-1.414L12.586 17 3.294 7.707a1 1 0 0 1-.222-.336l-.041-.128-1-4a1 1 0 0 1 .263-.95M4.903 6.49 14 15.586 15.586 14 6.49 4.903l-2.115-.529z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BladeSwordIconBold.displayName = "BladeSwordIconBold";
export { BladeSwordIconBold };
