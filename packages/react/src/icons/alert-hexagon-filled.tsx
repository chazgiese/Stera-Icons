import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertHexagonIconFilled = memo(
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
          fillRule="evenodd"
          d="M13.911 2c1.244 0 2.083-.01 2.855.233a5 5 0 0 1 1.771.993c.61.531 1.04 1.254 1.688 2.315l1.589 2.6c.703 1.151 1.19 1.922 1.378 2.771.16.716.16 1.46 0 2.176-.189.849-.675 1.62-1.378 2.77l-1.59 2.6c-.648 1.062-1.076 1.784-1.687 2.315a5 5 0 0 1-1.771.994c-.772.244-1.611.233-2.855.233H10.09c-1.244 0-2.083.01-2.855-.233a5 5 0 0 1-1.771-.994c-.61-.53-1.039-1.253-1.688-2.314l-1.588-2.6c-.704-1.152-1.19-1.922-1.38-2.771a5 5 0 0 1 0-2.176c.19-.849.676-1.62 1.38-2.77L3.775 5.54c.649-1.061 1.077-1.784 1.688-2.315a5 5 0 0 1 1.771-.993C8.006 1.99 8.845 2 10.09 2zm-1.91 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AlertHexagonIconFilled.displayName = "AlertHexagonIconFilled";
export { AlertHexagonIconFilled };
