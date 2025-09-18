import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpDown = memo(
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
          d="M12 1.25c.199 0 .39.08.53.22l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v16.38l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-.946.094l-.114-.094-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V3.81L7.53 7.53a.75.75 0 1 1-1.06-1.06l5-5 .114-.094A.75.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
ArrowUpDown.displayName = "ArrowUpDown";
export { ArrowUpDown };
