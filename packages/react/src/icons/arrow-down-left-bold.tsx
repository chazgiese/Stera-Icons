import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownLeftIconBold = memo(
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
          d="M17.293 5.293a1 1 0 1 1 1.414 1.414L8.414 17H16a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v7.586z"
        />
        <path
          fill="currentColor"
          d="M17.293 5.293a1 1 0 1 1 1.414 1.414L8.414 17H16a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v7.586z"
        />
      </svg>
    ))
);
ArrowDownLeftIconBold.displayName = "ArrowDownLeftIconBold";
export { ArrowDownLeftIconBold };
