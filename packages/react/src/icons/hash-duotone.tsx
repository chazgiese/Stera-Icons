import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M9.75 21a.75.75 0 0 1-1.5 0v-5.25h1.5zM15.75 21a.75.75 0 0 1-1.5 0v-5.25h1.5zM9.75 14.25h-1.5v-4.5h1.5zM15.75 14.25h-1.5v-4.5h1.5zM9 2.25a.75.75 0 0 1 .75.75v5.25h-1.5V3A.75.75 0 0 1 9 2.25M15 2.25a.75.75 0 0 1 .75.75v5.25h-1.5V3a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          d="M21 14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 8.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
HashIconDuotone.displayName = "HashIconDuotone";
export { HashIconDuotone };
