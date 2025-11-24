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
          d="M3.14 9.914a1.5 1.5 0 0 1 2.089.368l3.738 5.34-1.264 1.355a1.5 1.5 0 0 0-.133 1.88l-4.798-6.854a1.5 1.5 0 0 1 .368-2.089"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.903 4.977a1.5 1.5 0 0 1 2.194 2.046l-11.2 12a1.5 1.5 0 0 1-2.194-2.046z"
        />
      </svg>
    ))
);
CheckIconFilltone.displayName = "CheckIconFilltone";
export { CheckIconFilltone };
