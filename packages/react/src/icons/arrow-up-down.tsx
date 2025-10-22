import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpDownIcon = memo(
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
          d="M12 1.25c.199 0 .39.08.53.22l4.5 4.5a.75.75 0 1 1-1.06 1.06l-3.22-3.22v16.38l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.946.094l-.114-.094-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.81L8.03 7.03a.75.75 0 1 1-1.06-1.06l4.5-4.5.114-.094A.75.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
ArrowUpDownIcon.displayName = "ArrowUpDownIcon";
export { ArrowUpDownIcon };
