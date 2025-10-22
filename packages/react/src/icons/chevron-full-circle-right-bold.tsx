import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleRightIconBold = memo(
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
          d="M11.207 6.793A1 1 0 0 0 9.5 7.5v9a1 1 0 0 0 1.707.707l4.5-4.5a1 1 0 0 0 0-1.414z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 2a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullCircleRightIconBold.displayName = "ChevronFullCircleRightIconBold";
export { ChevronFullCircleRightIconBold };
