import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpIconDuotone = memo(
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
          d="M12.75 6.81V19a.75.75 0 0 1-1.5 0V6.81l.75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.47 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 1 1-1.06 1.06L12 6.06l-6.47 6.47a.75.75 0 1 1-1.06-1.06z"
        />
      </svg>
    ))
);
ArrowUpIconDuotone.displayName = "ArrowUpIconDuotone";
export { ArrowUpIconDuotone };
