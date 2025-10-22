import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineRightIconFilled = memo(
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
          d="M21 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1M11.436 5.374c-.807-.806-2.186-.235-2.186.905V11H3a1 1 0 1 0 0 2h6.25v4.72c0 1.14 1.38 1.712 2.185.906l5.72-5.72c.5-.5.5-1.311 0-1.811z"
        />
      </svg>
    ))
);
ArrowLineRightIconFilled.displayName = "ArrowLineRightIconFilled";
export { ArrowLineRightIconFilled };
