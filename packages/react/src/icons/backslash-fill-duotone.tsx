import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BackslashIconFillDuotone = memo(
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
          d="m10.879 12.996 8 9a1.5 1.5 0 0 0 2.242-1.992l-8-9z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.122 2.004A1.5 1.5 0 0 0 2.88 3.996l8 9 2.242-1.992z"
        />
      </svg>
    ))
);
BackslashIconFillDuotone.displayName = "BackslashIconFillDuotone";
export { BackslashIconFillDuotone };
