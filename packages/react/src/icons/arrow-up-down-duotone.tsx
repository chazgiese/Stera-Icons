import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpDownIconDuotone = memo(
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
          d="M12.75 3.81v16.38l-.75.75-.75-.75V3.81l.75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.97 16.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06L12 20.94zM12 1.25c.199 0 .39.08.53.22l4.5 4.5a.75.75 0 1 1-1.06 1.06L12 3.06 8.03 7.03a.75.75 0 1 1-1.06-1.06l4.5-4.5.114-.094A.75.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
ArrowUpDownIconDuotone.displayName = "ArrowUpDownIconDuotone";
export { ArrowUpDownIconDuotone };
