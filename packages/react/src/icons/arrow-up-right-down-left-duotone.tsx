import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightDownLeftIconDuotone = memo(
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
          d="M4 12.75a.75.75 0 0 1 .75.75v5.75h5.75a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75M20 3.25a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V4.75H13.5a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          d="M19.25 4.75v1.06L5.81 19.25H4.75v-1.06L18.19 4.75z"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowUpRightDownLeftIconDuotone.displayName = "ArrowUpRightDownLeftIconDuotone";
export { ArrowUpRightDownLeftIconDuotone };
