import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftTopIconFill = memo(
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
          d="M5.293 2.293A1 1 0 0 1 7 3v3h8.5a7.5 7.5 0 0 1 0 15H8a1 1 0 0 1 0-2h7.5a5.5 5.5 0 1 0 0-11H7v3a1 1 0 0 1-1.707.707l-4-4a.994.994 0 0 1-.165-1.195l.006-.012q.066-.114.159-.207z"
        />
      </svg>
    ))
);
ArrowULeftTopIconFill.displayName = "ArrowULeftTopIconFill";
export { ArrowULeftTopIconFill };
