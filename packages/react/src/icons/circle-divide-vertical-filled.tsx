import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideVerticalFilled = memo(
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
          d="M13 1.594c0-.294.253-.525.544-.485C18.888 1.86 23 6.45 23 12s-4.112 10.14-9.456 10.89a.482.482 0 0 1-.544-.484zM1 12C1 6.45 5.112 1.86 10.456 1.11c.29-.041.544.19.544.484v20.812a.482.482 0 0 1-.544.485C5.112 22.14 1 17.55 1 12"
        />
      </svg>
    ))
);
CircleDivideVerticalFilled.displayName = "CircleDivideVerticalFilled";
export { CircleDivideVerticalFilled };
