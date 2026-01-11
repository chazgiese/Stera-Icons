import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkOffIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.95 10.86a1.5 1.5 0 1 1 2.121 2.121l-.754.754a2.791 2.791 0 0 0 3.948 3.948l.753-.754a1.5 1.5 0 0 1 2.122 2.12l-.753.755a5.792 5.792 0 0 1-8.19-8.19zM11.613 4.196a5.792 5.792 0 0 1 8.19 8.19l-.753.754a1.5 1.5 0 1 1-2.121-2.122l.754-.753a2.792 2.792 0 0 0-3.948-3.948l-.754.754a1.5 1.5 0 0 1-2.12-2.12z" />
        </g>
        <path
          fill="currentColor"
          d="M3.828 3.828a1.5 1.5 0 0 1 2.121 0L20.172 18.05a1.5 1.5 0 0 1-2.122 2.122L3.828 5.949a1.5 1.5 0 0 1 0-2.12"
        />
      </svg>
    ))
);
LinkOffIconFillDuotone.displayName = "LinkOffIconFillDuotone";
export { LinkOffIconFillDuotone };
