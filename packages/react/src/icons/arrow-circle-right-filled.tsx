import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleRightIconFilled = memo(
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
          d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M6 12a1 1 0 0 0 1 1h7.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 1 0-1.414 1.414L14.586 11H7a1 1 0 0 0-1 1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleRightIconFilled.displayName = "ArrowCircleRightIconFilled";
export { ArrowCircleRightIconFilled };
