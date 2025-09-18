import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftRightFilled = memo(
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
          d="M1 12a1 1 0 0 1 .293-.707l5-5A1 1 0 0 1 8 7v4h8V7a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 17v-4H8v4a1 1 0 0 1-1.707.707l-5-5-.066-.073A1 1 0 0 1 1 12"
        />
      </svg>
    ))
);
ArrowLeftRightFilled.displayName = "ArrowLeftRightFilled";
export { ArrowLeftRightFilled };
