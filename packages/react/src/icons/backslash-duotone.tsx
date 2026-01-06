import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BackslashIconDuotone = memo(
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
          d="M20.56 20.502a.75.75 0 1 1-1.12.996l-8-9 1.12-.996z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3.502 2.44a.75.75 0 0 1 1.059.062l8 9-1.121.996-8-9a.75.75 0 0 1 .062-1.058"
        />
      </svg>
    ))
);
BackslashIconDuotone.displayName = "BackslashIconDuotone";
export { BackslashIconDuotone };
