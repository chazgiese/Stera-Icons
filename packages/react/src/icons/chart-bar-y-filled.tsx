import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarYFilled = memo(
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
          d="M16.5 3A1.5 1.5 0 0 1 15 4.5H3a1.5 1.5 0 1 1 0-3h12A1.5 1.5 0 0 1 16.5 3M22.5 9a1.5 1.5 0 0 1-1.5 1.5H3l-.153-.008a1.5 1.5 0 0 1 0-2.984L3 7.5h18A1.5 1.5 0 0 1 22.5 9M14.5 15a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 1.5 1.5M18.5 21a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1 0-3h14a1.5 1.5 0 0 1 1.5 1.5"
        />
      </svg>
    ))
);
ChartBarYFilled.displayName = "ChartBarYFilled";
export { ChartBarYFilled };
