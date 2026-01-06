import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightIconBoldDuotone = memo(
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
          d="M17 7v1.414L6.707 18.707a1 1 0 0 1-1.414-1.414L15.586 7z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8 5a1 1 0 0 0 0 2h9v9a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z"
        />
      </svg>
    ))
);
ArrowUpRightIconBoldDuotone.displayName = "ArrowUpRightIconBoldDuotone";
export { ArrowUpRightIconBoldDuotone };
