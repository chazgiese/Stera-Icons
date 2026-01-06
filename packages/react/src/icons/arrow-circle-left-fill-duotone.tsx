import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleLeftIconFillDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.707 5.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 1 0 1.414-1.414L9.414 13H17a1 1 0 0 0 0-2H9.414l3.293-3.293a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 12a1 1 0 0 1-1 1H9.414l3.293 3.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L9.414 11H17a1 1 0 0 1 1 1"
        />
      </svg>
    ))
);
ArrowCircleLeftIconFillDuotone.displayName = "ArrowCircleLeftIconFillDuotone";
export { ArrowCircleLeftIconFillDuotone };
