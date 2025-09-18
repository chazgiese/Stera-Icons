import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullUpBold = memo(
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
          d="M11.293 7.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 19 16H5a1 1 0 0 1-.707-1.707zM7.414 14h9.172L12 9.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullUpBold.displayName = "ChevronFullUpBold";
export { ChevronFullUpBold };
