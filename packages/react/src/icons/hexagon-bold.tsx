import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HexagonIconBold = memo(
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
          d="M13.911 2c1.244 0 2.084-.01 2.855.233a5 5 0 0 1 1.771.994c.61.53 1.04 1.253 1.688 2.314l1.589 2.6c.703 1.152 1.19 1.922 1.378 2.771a5 5 0 0 1 0 2.176c-.189.849-.675 1.62-1.378 2.77l-1.59 2.6c-.648 1.062-1.076 1.785-1.687 2.315a5 5 0 0 1-1.771.994c-.771.244-1.611.233-2.855.233H10.09c-1.243 0-2.083.01-2.854-.233a5 5 0 0 1-1.772-.994c-.61-.53-1.039-1.253-1.687-2.314l-1.59-2.6C1.484 14.706.998 13.936.809 13.087a5 5 0 0 1 0-2.176c.19-.849.675-1.62 1.379-2.77L3.776 5.54c.648-1.061 1.076-1.784 1.687-2.314a5 5 0 0 1 1.772-.994C8.005 1.99 8.845 2 10.089 2zM10.09 4c-1.374 0-1.844.01-2.251.14a3 3 0 0 0-1.062.596c-.323.28-.578.675-1.294 1.848l-1.59 2.6C3.116 10.458 2.86 10.9 2.76 11.348c-.096.43-.096.876 0 1.306.1.448.355.89 1.133 2.162l1.589 2.601c.716 1.173.971 1.567 1.294 1.848.31.269.67.472 1.062.596.407.129.877.14 2.251.14h3.822c1.374 0 1.844-.01 2.251-.14a3 3 0 0 0 1.063-.596c.322-.28.577-.675 1.294-1.848l1.589-2.6c.777-1.273 1.032-1.715 1.132-2.163.096-.43.096-.876 0-1.306-.1-.448-.355-.89-1.132-2.162l-1.59-2.601c-.716-1.173-.971-1.568-1.293-1.848a3 3 0 0 0-1.063-.596c-.407-.13-.877-.14-2.25-.14z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HexagonIconBold.displayName = "HexagonIconBold";
export { HexagonIconBold };
