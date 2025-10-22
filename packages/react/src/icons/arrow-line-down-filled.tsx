import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineDownIconFilled = memo(
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
          d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM12 2a1 1 0 0 1 1 1v6.25h4.72c1.14 0 1.712 1.38.906 2.185l-5.72 5.72c-.5.5-1.311.5-1.811 0l-5.721-5.72c-.806-.806-.235-2.185.905-2.185H11V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ArrowLineDownIconFilled.displayName = "ArrowLineDownIconFilled";
export { ArrowLineDownIconFilled };
