import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullRightIconDuotone = memo(
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
          d="M8.47 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L14.94 12 8.47 5.53a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          d="M8.25 5c0 .192.073.384.22.53l1.28 1.28v10.38l-1.28 1.28a.75.75 0 0 0-.22.53z"
          opacity={0.4}
        />
      </svg>
    ))
);
ChevronFullRightIconDuotone.displayName = "ChevronFullRightIconDuotone";
export { ChevronFullRightIconDuotone };
