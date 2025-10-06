import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketFilled = memo(
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
          d="M13.5 19a1 1 0 0 1 1 1h-1c1 0 1 .002 1 .002v.024l-.002.034a1.7 1.7 0 0 1-.044.321c-.04.186-.113.423-.246.69-.27.542-.766 1.17-1.648 1.76l-.554.371-.555-.369c-.886-.589-1.385-1.217-1.657-1.76a3 3 0 0 1-.248-.691 2 2 0 0 1-.044-.322l-.002-.034v-.024s0-.002 1-.002h-1a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.575 1.095a1 1 0 0 1 .98.073C14.95 2.765 16.4 4.601 17.188 6.49c.425 1.02.647 2.037.73 3.014l2.789 2.79c.225.224.33.544.281.858l-1 6.5a1 1 0 0 1-1.518.696L14.714 18H9.286L5.53 20.348a1 1 0 0 1-1.518-.695l-1-6.5a1 1 0 0 1 .28-.86L6.08 9.505c.083-.977.306-1.994.731-3.015.788-1.889 2.239-3.725 4.634-5.322zm-6.51 12.254.692 4.498 1.898-1.187a14.462 14.462 0 0 1-1.47-4.433zm12.748-1.121a14.5 14.5 0 0 1-1.47 4.432l1.9 1.187.693-4.498zM12 7a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 7"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RocketFilled.displayName = "RocketFilled";
export { RocketFilled };
