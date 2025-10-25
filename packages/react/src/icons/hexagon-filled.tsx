import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HexagonIconFilled = memo(
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
          d="M13.911 2c1.244 0 2.084-.01 2.855.233a5 5 0 0 1 1.771.994c.61.53 1.04 1.253 1.688 2.314l1.589 2.6c.703 1.152 1.19 1.922 1.378 2.771a5 5 0 0 1 0 2.176c-.189.849-.675 1.62-1.378 2.77l-1.59 2.6c-.648 1.062-1.076 1.785-1.687 2.315a5 5 0 0 1-1.771.994c-.771.244-1.611.233-2.855.233H10.09c-1.243 0-2.083.01-2.854-.233a5 5 0 0 1-1.772-.994c-.61-.53-1.039-1.253-1.687-2.314l-1.59-2.6C1.484 14.706.998 13.936.809 13.087a5 5 0 0 1 0-2.176c.19-.849.675-1.62 1.379-2.77L3.776 5.54c.648-1.061 1.076-1.784 1.687-2.314a5 5 0 0 1 1.772-.994C8.005 1.99 8.845 2 10.089 2z"
        />
        <path
          fill="currentColor"
          d="M13.911 2c1.244 0 2.084-.01 2.855.233a5 5 0 0 1 1.771.994c.61.53 1.04 1.253 1.688 2.314l1.589 2.6c.703 1.152 1.19 1.922 1.378 2.771a5 5 0 0 1 0 2.176c-.189.849-.675 1.62-1.378 2.77l-1.59 2.601c-.648 1.061-1.076 1.784-1.687 2.314a5 5 0 0 1-1.771.994c-.771.244-1.611.233-2.855.233H10.09c-1.243 0-2.083.01-2.854-.233a5 5 0 0 1-1.772-.994c-.61-.53-1.039-1.253-1.687-2.314l-1.59-2.6C1.484 14.707.998 13.936.809 13.087a5 5 0 0 1 0-2.176c.19-.849.675-1.62 1.379-2.77l1.589-2.6c.648-1.062 1.076-1.784 1.687-2.315a5 5 0 0 1 1.772-.994C8.005 1.99 8.845 2 10.089 2z"
        />
      </svg>
    ))
);
HexagonIconFilled.displayName = "HexagonIconFilled";
export { HexagonIconFilled };
