import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlusFilled = memo(
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
          d="M12 2a1.5 1.5 0 0 1 1.5 1.5v7h7a1.5 1.5 0 0 1 0 3h-7v7a1.5 1.5 0 0 1-3 0v-7h-7a1.5 1.5 0 0 1 0-3h7v-7A1.5 1.5 0 0 1 12 2"
        />
      </svg>
    ))
);
PlusFilled.displayName = "PlusFilled";
export { PlusFilled };
