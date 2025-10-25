import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BatteryFullIconFilltone = memo(
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
          d="M15 5.25c.921 0 1.65 0 2.24.04.595.04 1.103.125 1.577.321a4.75 4.75 0 0 1 2.572 2.572c.195.47.279.976.32 1.567h.791c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.791c-.041.591-.125 1.096-.32 1.567a4.75 4.75 0 0 1-2.572 2.572c-.474.196-.982.28-1.578.321-.589.04-1.318.04-2.239.04H7c-.921 0-1.65 0-2.24-.04-.595-.04-1.103-.125-1.577-.321A4.75 4.75 0 0 1 .61 15.817c-.196-.474-.28-.982-.321-1.578C.25 13.65.25 12.921.25 12s0-1.65.04-2.24c.04-.595.125-1.103.321-1.577A4.75 4.75 0 0 1 3.183 5.61c.474-.196.982-.28 1.578-.321.589-.04 1.318-.04 2.239-.04z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.4 7.5c.256 0 .537-.001.779.019.227.018.518.06.824.192l.132.061.173.097a2.5 2.5 0 0 1 .823.823l.097.173.061.132c.131.306.174.597.192.824.02.242.019.524.019.779v2.8c0 .255.001.537-.018.779a2.5 2.5 0 0 1-.254.956 2.5 2.5 0 0 1-1.093 1.092 2.5 2.5 0 0 1-.956.254c-.242.02-.523.019-.779.019H5.6c-.255 0-.537.001-.779-.019a2.5 2.5 0 0 1-.956-.254 2.5 2.5 0 0 1-1.093-1.092 2.5 2.5 0 0 1-.253-.956 6 6 0 0 1-.017-.384L2.5 13.4v-2.8c0-.255-.001-.537.019-.779a2.5 2.5 0 0 1 .253-.956l.097-.173a2.5 2.5 0 0 1 .996-.92l.132-.061c.306-.131.597-.174.824-.192.242-.02.524-.019.779-.019z"
        />
      </svg>
    ))
);
BatteryFullIconFilltone.displayName = "BatteryFullIconFilltone";
export { BatteryFullIconFilltone };
