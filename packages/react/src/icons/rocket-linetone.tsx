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
          d="M13.5 19a1 1 0 0 1 1 1h-1c1 0 1 .001 1 .002v.024l-.002.034a1.7 1.7 0 0 1-.044.321c-.04.186-.113.423-.246.69-.27.542-.766 1.17-1.647 1.76l-.555.371-.555-.369c-.886-.589-1.385-1.217-1.657-1.76a3 3 0 0 1-.248-.691 2 2 0 0 1-.044-.322l-.002-.034v-.024s0-.002 1-.002h-1a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.575 1.095a1 1 0 0 1 .98.073C14.95 2.765 16.4 4.601 17.189 6.49c.784 1.883.882 3.753.678 5.384-.203 1.627-.709 3.038-1.158 4.036a14 14 0 0 1-.794 1.514l-.057.092-.017.026-.006.008-.002.003A1 1 0 0 1 15 18H9a1 1 0 0 1-.832-.445L9 17c-.775.517-.829.552-.833.554l-.002-.004-.006-.008-.016-.026-.058-.092a14.26 14.26 0 0 1-.794-1.514c-.449-.998-.955-2.409-1.158-4.036-.204-1.632-.106-3.501.679-5.384.787-1.889 2.238-3.725 4.633-5.322zM12 3.223C10.24 4.518 9.22 5.91 8.657 7.26c-.621 1.492-.71 2.998-.54 4.366.172 1.373.604 2.587.998 3.464.169.374.33.682.456.91h4.858c.126-.228.287-.536.456-.91.395-.877.826-2.091.998-3.464.17-1.368.082-2.874-.54-4.366C14.78 5.91 13.759 4.518 12 3.223"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RocketIconLinetone.displayName = "RocketIconLinetone";
export { RocketIconLinetone };
