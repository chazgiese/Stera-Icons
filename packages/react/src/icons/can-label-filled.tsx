import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CanLabelFilled = memo(
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
          d="M17.156 20.992A2 2 0 0 1 15.42 22H8.58a2 2 0 0 1-1.736-1.008L5.706 19h12.588z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 16.703q0 .15-.013.297H5.013A4 4 0 0 1 5 16.703V8h14zM12 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.5 2a1 1 0 0 1 .21 1.977l.763 1.336q.188.33.31.687H5.217q.122-.357.31-.687l.762-1.336A1 1 0 0 1 6.5 2z"
        />
      </svg>
    ))
);
CanLabelFilled.displayName = "CanLabelFilled";
export { CanLabelFilled };
