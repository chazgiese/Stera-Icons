import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendIconLinetone = memo(
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
          d="M15.293 7.293a1 1 0 1 1 1.414 1.414l-5 5-1.414-1.414z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.178 2.112c1.675-.558 3.268 1.035 2.71 2.71L16.65 20.533c-.664 1.991-3.497 1.941-4.09-.072l-2.05-6.973-6.973-2.05c-2.013-.593-2.063-3.426-.072-4.09zm.632 1.897L4.098 9.245c-.052.018-.068.04-.075.05A.16.16 0 0 0 4 9.384c0 .04.013.072.026.089.007.01.024.03.077.046l7.496 2.205a1 1 0 0 1 .634.558l.043.119 2.205 7.496c.015.053.035.07.046.077a.16.16 0 0 0 .088.025.16.16 0 0 0 .09-.022c.01-.008.03-.024.048-.075L19.99 4.19a.13.13 0 0 0 .006-.08.15.15 0 0 0-.04-.067.15.15 0 0 0-.067-.04.13.13 0 0 0-.08.006"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendIconLinetone.displayName = "SendIconLinetone";
export { SendIconLinetone };
