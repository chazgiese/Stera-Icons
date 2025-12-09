import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketIconFilled = memo(
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
          d="M11.575 1.095a1 1 0 0 1 .98.073C14.95 2.765 16.4 4.6 17.189 6.49a10 10 0 0 1 .73 3.014l2.788 2.789a1 1 0 0 1 .281.86l-1 6.5a1 1 0 0 1-1.518.695L14.714 18H9.286L5.53 20.348a1.002 1.002 0 0 1-1.518-.696l-1-6.5a1 1 0 0 1 .281-.86L6.08 9.506c.083-.977.306-1.994.732-3.015.787-1.89 2.238-3.725 4.633-5.322zm-6.51 12.253.692 4.499 1.898-1.187a14.7 14.7 0 0 1-1.47-4.433zm12.749-1.12a14.5 14.5 0 0 1-1.47 4.432l1.9 1.187.692-4.499zM12 7a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 7"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10.5 19a1 1 0 0 0-1 1c0 .37.13.746.294 1.073.48.956 1.345 1.55 2.206 2.129.86-.579 1.727-1.173 2.206-2.129.164-.327.294-.702.294-1.073a1 1 0 0 0-1-1z"
        />
      </svg>
    ))
);
RocketIconFilled.displayName = "RocketIconFilled";
export { RocketIconFilled };
