import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleLeftIconFill = memo(
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
          d="M22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25 22.75 6.063 22.75 12M18 12a1 1 0 0 0-1-1H9.414l3.293-3.293a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 1 0 1.414-1.414L9.414 13H17a1 1 0 0 0 1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleLeftIconFill.displayName = "ArrowCircleLeftIconFill";
export { ArrowCircleLeftIconFill };
