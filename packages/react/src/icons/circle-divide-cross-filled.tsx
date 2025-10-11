import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideCrossIconFilled = memo(
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
          d="M10.5 13a.5.5 0 0 1 .5.5v8.906a.482.482 0 0 1-.544.484 11 11 0 0 1-9.346-9.346.482.482 0 0 1 .484-.544zM22.407 13c.293 0 .525.253.484.544a11 11 0 0 1-9.347 9.346.482.482 0 0 1-.544-.485V13.5a.5.5 0 0 1 .5-.5zM10.456 1.11c.291-.041.544.19.544.484V10.5a.5.5 0 0 1-.5.5H1.594a.482.482 0 0 1-.484-.544 11 11 0 0 1 9.346-9.346M13.544 1.11c4.84.68 8.667 4.507 9.347 9.346.04.291-.19.544-.484.544H13.5a.5.5 0 0 1-.5-.5V1.594c0-.294.253-.525.544-.484"
        />
      </svg>
    ))
);
CircleDivideCrossIconFilled.displayName = "CircleDivideCrossIconFilled";
export { CircleDivideCrossIconFilled };
