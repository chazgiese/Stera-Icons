import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlashIconFillDuotone = memo(
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
          d="m13.121 12.996-8 9a1.5 1.5 0 0 1-2.242-1.992l8-9z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.879 2.004a1.5 1.5 0 0 1 2.242 1.992l-8 9-2.242-1.992z"
        />
      </svg>
    ))
);
SlashIconFillDuotone.displayName = "SlashIconFillDuotone";
export { SlashIconFillDuotone };
