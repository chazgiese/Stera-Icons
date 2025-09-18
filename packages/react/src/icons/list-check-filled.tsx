import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckFilled = memo(
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
          d="M5.086 15.648a1.25 1.25 0 0 1 1.828 1.705l-2.8 3a1.253 1.253 0 0 1-1.938-.136l-1.2-1.714a1.25 1.25 0 0 1 2.048-1.433l.315.449zM22 16.5a1.5 1.5 0 1 1 0 3H11a1.5 1.5 0 0 1 0-3zM5.086 9.648a1.25 1.25 0 0 1 1.828 1.705l-2.8 3a1.253 1.253 0 0 1-1.938-.136l-1.2-1.714a1.25 1.25 0 0 1 2.048-1.434l.315.45zM22 10.5a1.5 1.5 0 1 1 0 3H11a1.5 1.5 0 0 1 0-3zM5.086 3.648a1.25 1.25 0 0 1 1.828 1.705l-2.8 3a1.252 1.252 0 0 1-1.938-.136l-1.2-1.714A1.25 1.25 0 0 1 3.023 5.07l.315.45zM22 4.5a1.5 1.5 0 1 1 0 3H11a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
ListCheckFilled.displayName = "ListCheckFilled";
export { ListCheckFilled };
