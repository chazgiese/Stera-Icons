import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckmarkBold = memo(
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
          d="M19.269 5.317a1.001 1.001 0 0 1 1.462 1.365l-11.2 12a1 1 0 0 1-1.55-.11l-4.8-6.855a1.001 1.001 0 0 1 1.638-1.148l4.092 5.846z"
        />
      </svg>
    ))
);
CheckmarkBold.displayName = "CheckmarkBold";
export { CheckmarkBold };
