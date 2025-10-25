import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullRightIconBold = memo(
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
          d="M8.617 4.076a1 1 0 0 1 1.09.217l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 8 19V5a1 1 0 0 1 .617-.924M10 16.586 14.586 12 10 7.414z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.617 4.076a1 1 0 0 1 1.09.217l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 8 19V5a1 1 0 0 1 .617-.924M10 16.586 14.586 12 10 7.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullRightIconBold.displayName = "ChevronFullRightIconBold";
export { ChevronFullRightIconBold };
