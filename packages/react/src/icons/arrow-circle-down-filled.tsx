import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownIconFilled = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25M12 6a1 1 0 0 0-1 1v7.586l-3.293-3.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L13 14.586V7a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleDownIconFilled.displayName = "ArrowCircleDownIconFilled";
export { ArrowCircleDownIconFilled };
