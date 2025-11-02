import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScissorsIconFilled = memo(
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
          d="M20.23 5.616a2.045 2.045 0 0 1 2.437 1.014.75.75 0 0 1-.292.993l-14.189 8.19a3.751 3.751 0 1 1-1.251-2.164l1.475-.85 1.044-2.682a2.75 2.75 0 0 1 1.729-1.622zM5.581 15.876a1.25 1.25 0 1 0-2.165 1.25 1.25 1.25 0 0 0 2.165-1.25M11.5 10.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22.406 16.259c.346.2.475.637.292.993a2.06 2.06 0 0 1-2.433 1.027l-9.04-2.771-.004-.002 4.94-2.853z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.284 5.505a3.75 3.75 0 0 1 6.934 2.562l.764.442c-.291.339-.527.729-.693 1.155l-.424 1.086-.898-.519a3.75 3.75 0 0 1-5.683-4.726m3.873.792a1.25 1.25 0 1 0-1.25 2.167 1.25 1.25 0 0 0 1.25-2.167"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScissorsIconFilled.displayName = "ScissorsIconFilled";
export { ScissorsIconFilled };
