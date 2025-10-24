import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckIconFilltone = memo(
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
          d="M3.14 9.914a1.5 1.5 0 0 1 2.089.368l4.8 6.858a1.5 1.5 0 0 1-2.458 1.72l-4.8-6.857a1.5 1.5 0 0 1 .369-2.089"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M18.904 4.977a1.5 1.5 0 0 1 2.193 2.046l-11.2 12a1.5 1.5 0 0 1-2.194-2.046z"
        />
      </svg>
    ))
);
CheckIconFilltone.displayName = "CheckIconFilltone";
export { CheckIconFilltone };
