import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketIconLinetone = memo(
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
          <path d="M6.293 9.293a1 1 0 1 1 1.414 1.414l-2.642 2.642.692 4.498 2.713-1.695a1 1 0 0 1 1.06 1.696l-4 2.5a1.002 1.002 0 0 1-1.518-.696l-1-6.5a1 1 0 0 1 .281-.859zM16.293 9.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 .281.86l-1 6.5a1 1 0 0 1-1.518.695l-4-2.5a1 1 0 0 1 1.06-1.696l2.713 1.695.693-4.498-2.643-2.642a1 1 0 0 1 0-1.414M12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7" />
        </g>
        <path
          fill="currentColor"
          d="M13.5 19a1 1 0 0 1 1 1h-1c1 0 1 .001 1 .002v.024l-.002.033-.006.085a2 2 0 0 1-.038.237c-.04.186-.113.423-.246.69-.27.542-.766 1.17-1.648 1.76l-.554.371-.555-.37c-.886-.588-1.385-1.216-1.657-1.759a3 3 0 0 1-.248-.691 2 2 0 0 1-.044-.323l-.002-.033v-.024s0-.002 1-.002h-1a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.575 1.095a1 1 0 0 1 .98.073C14.95 2.765 16.4 4.6 17.188 6.49c.785 1.882.883 3.752.68 5.384-.204 1.627-.71 3.038-1.159 4.036a14 14 0 0 1-.794 1.514q-.036.058-.058.091l-.016.027-.006.008-.002.003h-.001A1 1 0 0 1 15 18H9a1 1 0 0 1-.832-.445L9 17l-.833.554-.002-.004-.006-.008-.016-.027-.058-.091a10 10 0 0 1-.194-.328c-.16-.281-.375-.685-.6-1.186-.45-.998-.955-2.41-1.158-4.036-.204-1.632-.106-3.501.678-5.384C7.6 4.6 9.05 2.765 11.446 1.168zM12 3.223C10.24 4.518 9.22 5.91 8.657 7.26c-.622 1.492-.71 2.998-.54 4.366.172 1.373.604 2.587.998 3.464.169.374.33.682.456.91h4.858c.126-.228.287-.536.456-.91.394-.877.826-2.091.998-3.464.17-1.368.082-2.874-.54-4.366C14.78 5.91 13.759 4.518 12 3.223"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RocketIconLinetone.displayName = "RocketIconLinetone";
export { RocketIconLinetone };
