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
          d="M15.293 7.293a1 1 0 1 1 1.414 1.414l-4.265 4.264-.167-.57-.043-.118a1 1 0 0 0-.633-.558l-.57-.168z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.178 2.112c1.675-.558 3.268 1.036 2.71 2.71l-5.237 15.712c-.664 1.99-3.497 1.94-4.09-.072l-2.049-6.974-6.974-2.05c-2.013-.592-2.063-3.425-.072-4.089zm.632 1.897L4.098 9.246c-.052.017-.068.039-.075.05A.16.16 0 0 0 4 9.384c.001.041.013.072.026.09.007.01.024.03.077.045l7.496 2.205a1 1 0 0 1 .634.559l.043.118 2.205 7.496c.015.053.035.07.046.077a.16.16 0 0 0 .089.026.16.16 0 0 0 .088-.023c.011-.007.032-.023.05-.075L19.99 4.19a.13.13 0 0 0 .005-.079.15.15 0 0 0-.04-.067.15.15 0 0 0-.067-.04.13.13 0 0 0-.08.005"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendIconLinetone.displayName = "SendIconLinetone";
export { SendIconLinetone };
