import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanTextIconFillDuotone = memo(
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
          <path d="M3 16a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5H7a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 19.5V17a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5H17a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 .5-.5V17a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H4.5a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2zM19.5 2A2.5 2.5 0 0 1 22 4.5V7a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H17a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M13 14.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM17 10.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM17 6.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
ScanTextIconFillDuotone.displayName = "ScanTextIconFillDuotone";
export { ScanTextIconFillDuotone };
