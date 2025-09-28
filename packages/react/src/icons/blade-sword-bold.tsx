import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeSwordBold = memo(
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
          d="M2.293 2.293a1 1 0 0 1 .95-.262l4 1c.175.044.336.134.464.262L17 12.586l1.293-1.293a1 1 0 1 1 1.414 1.414L18 14.414v2.172l2.04 2.041 1.22.406c.184.061.352.165.49.302l.28.282a1.25 1.25 0 0 1 0 1.767l-.646.647a1.25 1.25 0 0 1-1.673.086l-.094-.086-.282-.282a1.3 1.3 0 0 1-.248-.354l-.054-.135-.407-1.219-2.04-2.04h-2.172l-1.707 1.706a1 1 0 0 1-1.414-1.414L12.586 17 3.293 7.707a1 1 0 0 1-.221-.336l-.041-.128-1-4a1 1 0 0 1 .262-.95m2.61 4.196L14 15.586 15.586 14 6.49 4.903l-2.116-.529z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BladeSwordBold.displayName = "BladeSwordBold";
export { BladeSwordBold };
