import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SquareDashed = memo(
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
          d="M3 16.75a.75.75 0 0 1 .75.75v.04a2.71 2.71 0 0 0 2.71 2.71h.04a.75.75 0 0 1 0 1.5h-.04a4.21 4.21 0 0 1-4.21-4.21v-.04a.75.75 0 0 1 .75-.75M14 20.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM21 16.75a.75.75 0 0 1 .75.75v.04a4.21 4.21 0 0 1-4.21 4.21h-.04a.75.75 0 0 1 0-1.5h.04a2.71 2.71 0 0 0 2.71-2.71v-.04a.75.75 0 0 1 .75-.75M3.003 9.255a.75.75 0 0 1 .75.75l-.001 4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M21.003 9.255a.75.75 0 0 1 .75.75l-.001 4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M6.5 2.25a.75.75 0 0 1 0 1.5h-.04a2.71 2.71 0 0 0-2.71 2.71v.04a.75.75 0 0 1-1.5 0v-.04a4.21 4.21 0 0 1 4.21-4.21zM17.54 2.25a4.21 4.21 0 0 1 4.21 4.21v.04a.75.75 0 0 1-1.5 0v-.04a2.71 2.71 0 0 0-2.71-2.71h-.04a.75.75 0 0 1 0-1.5zM14 2.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
SquareDashed.displayName = "SquareDashed";
export { SquareDashed };
