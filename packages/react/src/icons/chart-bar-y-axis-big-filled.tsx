import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarYAxisBigFilled = memo(
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
          d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M15 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM20 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM17 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
ChartBarYAxisBigFilled.displayName = "ChartBarYAxisBigFilled";
export { ChartBarYAxisBigFilled };
