import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreCircleIconFillDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
MoreCircleIconFillDuotone.displayName = "MoreCircleIconFillDuotone";
export { MoreCircleIconFillDuotone };
