import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketIconFilltone = memo(
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
          d="M17.189 6.49c-.788-1.889-2.239-3.725-4.634-5.322a1 1 0 0 0-1.11 0C9.048 2.765 7.597 4.6 6.81 6.49c-.785 1.882-.883 3.752-.68 5.384.204 1.627.71 3.038 1.16 4.036.252.563.533 1.129.876 1.644.185.278.498.446.832.446H15c.334 0 .647-.168.832-.446.343-.515.624-1.08.877-1.644.45-.998.955-2.409 1.158-4.036.204-1.631.106-3.501-.678-5.384"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.5 19a1 1 0 0 1 1 1h-1c1 0 1 .002 1 .002v.024l-.002.034a1.7 1.7 0 0 1-.044.32c-.04.187-.113.424-.246.691-.27.542-.766 1.17-1.648 1.76l-.554.371-.555-.369c-.886-.589-1.385-1.217-1.657-1.76a3 3 0 0 1-.248-.691 2 2 0 0 1-.044-.322l-.002-.034v-.024s0-.002 1-.002h-1a1 1 0 0 1 1-1zM6.079 9.506c-.07.825-.04 1.621.053 2.368.203 1.627.709 3.038 1.158 4.036.253.563.534 1.129.877 1.644.185.277.498.446.832.446h.287L5.53 20.348a1.002 1.002 0 0 1-1.518-.696l-1-6.5a1 1 0 0 1 .28-.859zM20.707 12.293a1 1 0 0 1 .281.86l-1 6.5a1 1 0 0 1-1.518.695L14.714 18H15c.334 0 .647-.168.832-.446.343-.515.624-1.08.877-1.644.449-.998.955-2.409 1.158-4.036.093-.747.121-1.545.05-2.37zM12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7"
        />
      </svg>
    ))
);
RocketIconFilltone.displayName = "RocketIconFilltone";
export { RocketIconFilltone };
