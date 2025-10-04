import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScissorsFilled = memo(
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
          d="M20.23 5.617a2.044 2.044 0 0 1 2.437 1.014.75.75 0 0 1-.292.992L8.186 15.815a3.751 3.751 0 1 1-1.249-2.166l1.473-.85 1.044-2.68a2.75 2.75 0 0 1 1.728-1.624zM5.581 15.875a1.25 1.25 0 1 0-2.165 1.25 1.25 1.25 0 0 0 2.165-1.25M11.5 10.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22.407 16.259a.75.75 0 0 1 .291.992 2.06 2.06 0 0 1-2.433 1.027l-9.04-2.771-.003-.002 4.94-2.852z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.284 5.507a3.75 3.75 0 0 1 6.934 2.56l.765.442a4 4 0 0 0-.693 1.155l-.424 1.086-.897-.518a3.751 3.751 0 0 1-5.685-4.725m3.872.792a1.25 1.25 0 1 0-1.249 2.166 1.25 1.25 0 0 0 1.25-2.166"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScissorsFilled.displayName = "ScissorsFilled";
export { ScissorsFilled };
