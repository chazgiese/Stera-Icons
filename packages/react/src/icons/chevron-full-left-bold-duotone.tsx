import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullLeftIconBoldDuotone = memo(
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
          d="M15.9 4.566q.098.2.1.434v14a1 1 0 0 0-.293-.707L14 16.586V7.414l1.707-1.707a1 1 0 0 0 .193-1.14"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14.293 4.293a1 1 0 1 1 1.414 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
ChevronFullLeftIconBoldDuotone.displayName = "ChevronFullLeftIconBoldDuotone";
export { ChevronFullLeftIconBoldDuotone };
