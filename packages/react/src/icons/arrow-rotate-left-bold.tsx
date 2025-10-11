import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRotateLeftIconBold = memo(
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
          d="M10.293.293a1 1 0 1 1 1.414 1.414L9.414 4H12a9 9 0 1 1-9 9 1 1 0 1 1 2 0 7 7 0 1 0 7-7H9.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
ArrowRotateLeftIconBold.displayName = "ArrowRotateLeftIconBold";
export { ArrowRotateLeftIconBold };
