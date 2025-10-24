import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlusIconFilled = memo(
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
          d="M12 2.5A1.5 1.5 0 0 1 13.5 4v6.5H20a1.5 1.5 0 0 1 0 3h-6.5V20a1.5 1.5 0 0 1-3 0v-6.5H4a1.5 1.5 0 0 1 0-3h6.5V4A1.5 1.5 0 0 1 12 2.5"
        />
      </svg>
    ))
);
PlusIconFilled.displayName = "PlusIconFilled";
export { PlusIconFilled };
