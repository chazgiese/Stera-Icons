import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronInwardIconBold = memo(
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
          d="M11.293 14.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 16.414l-5.293 5.293a1 1 0 1 1-1.414-1.414zM17.293 2.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L12 7.586z"
        />
      </svg>
    ))
);
ChevronInwardIconBold.displayName = "ChevronInwardIconBold";
export { ChevronInwardIconBold };
