import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpDownIconFilled = memo(
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
          d="M12 1a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 16 7h-3v10h3a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.338.068l-.076-.068-4-4A1 1 0 0 1 8 17h3V7H8a1 1 0 0 1-.707-1.707l4-4 .073-.066A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
ArrowUpDownIconFilled.displayName = "ArrowUpDownIconFilled";
export { ArrowUpDownIconFilled };
