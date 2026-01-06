import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightDownLeftIconFill = memo(
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
          d="M20 3a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1.707.707L16.75 8.664 8.664 16.75l2.543 2.543A1 1 0 0 1 10.5 21H4a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1.707-.707l2.543 2.543 8.086-8.086-2.543-2.543A1 1 0 0 1 13.5 3z"
        />
      </svg>
    ))
);
ArrowUpRightDownLeftIconFill.displayName = "ArrowUpRightDownLeftIconFill";
export { ArrowUpRightDownLeftIconFill };
