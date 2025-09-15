import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightDownLeftFilled = memo(
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
          d="M20.103 3.005A1 1 0 0 1 21 4v7a1 1 0 0 1-1.707.707L16.5 8.914 8.914 16.5l2.793 2.793A1 1 0 0 1 11 21H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1.707-.707L7.5 15.086 15.086 7.5l-2.793-2.793A1 1 0 0 1 13 3h7z"
        />
      </svg>
    ))
);
ArrowUpRightDownLeftFilled.displayName = "ArrowUpRightDownLeftFilled";
export { ArrowUpRightDownLeftFilled };
