import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextStrikethroughIconFilled = memo(
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
          d="M17 1.5a1.5 1.5 0 0 1 0 3h-5.5a3 3 0 0 0-.167 5.995h10.672a1.5 1.5 0 0 1 0 3h-3.313A6 6 0 0 1 13.5 22.5H7a1.5 1.5 0 0 1 0-3h6.5a3 3 0 1 0 0-6h-1q-.048-.001-.096-.005h-.308q-.048.004-.096.005h-.5q-.098-.001-.193-.005H2.005a1.5 1.5 0 0 1 0-3h4.297A6 6 0 0 1 11.5 1.5z"
        />
      </svg>
    ))
);
TextStrikethroughIconFilled.displayName = "TextStrikethroughIconFilled";
export { TextStrikethroughIconFilled };
