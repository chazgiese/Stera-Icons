import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RectangleDashed = memo(
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
          d="M2 15.75a.75.75 0 0 1 .75.75v.04a2.71 2.71 0 0 0 2.71 2.71h.04a.75.75 0 0 1 0 1.5h-.04a4.21 4.21 0 0 1-4.21-4.21v-.04a.75.75 0 0 1 .75-.75M15 19.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM22 15.75a.75.75 0 0 1 .75.75v.04a4.21 4.21 0 0 1-4.21 4.21h-.04a.75.75 0 0 1 0-1.5h.04a2.71 2.71 0 0 0 2.71-2.71v-.04a.75.75 0 0 1 .75-.75M2.003 10.25a.75.75 0 0 1 .75.75l-.001 2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M22 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M5.5 3.25a.75.75 0 0 1 0 1.5h-.04a2.71 2.71 0 0 0-2.71 2.71v.04a.75.75 0 0 1-1.5 0v-.04a4.21 4.21 0 0 1 4.21-4.21zM18.54 3.25a4.21 4.21 0 0 1 4.21 4.21v.04a.75.75 0 0 1-1.5 0v-.04a2.71 2.71 0 0 0-2.71-2.71h-.04a.75.75 0 0 1 0-1.5zM15 3.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
RectangleDashed.displayName = "RectangleDashed";
export { RectangleDashed };
