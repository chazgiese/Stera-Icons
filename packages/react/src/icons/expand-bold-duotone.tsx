import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandIconBoldDuotone = memo(
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
          <path d="M14.293 14.293a1 1 0 0 1 1.414 0L19 17.586V19h-1.414l-3.293-3.293a1 1 0 0 1 0-1.414M8.293 14.293a1 1 0 1 1 1.414 1.414L6.414 19H5v-1.414zM9.707 8.293a1 1 0 0 1-1.414 1.414L5 6.414V5h1.414zM19 5v1.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L17.586 5z" />
        </g>
        <path
          fill="currentColor"
          d="M4 15a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M20 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1M8 3a1 1 0 0 1 0 2H5v3a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM20 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5h-3a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ExpandIconBoldDuotone.displayName = "ExpandIconBoldDuotone";
export { ExpandIconBoldDuotone };
