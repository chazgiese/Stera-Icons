import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleFourPlusIconFilled = memo(
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
          d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 13a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-2.5H14a1 1 0 1 1 0-2h2.5V14a1 1 0 0 1 1-1M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"
        />
      </svg>
    ))
);
CircleFourPlusIconFilled.displayName = "CircleFourPlusIconFilled";
export { CircleFourPlusIconFilled };
