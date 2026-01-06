import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckIconDuotone = memo(
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
          d="M19.452 5.489a.75.75 0 0 1 1.096 1.023l-11.2 12a.75.75 0 0 1-1.096-1.023z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M9.345 18.514a1 1 0 0 1-.114.1.742.742 0 0 0 .114-.1M3.57 10.529a.75.75 0 0 1 1.045.184l4.268 6.098-.63.678a.75.75 0 0 0-.069.94l-4.798-6.856a.75.75 0 0 1 .185-1.044" />
        </g>
      </svg>
    ))
);
CheckIconDuotone.displayName = "CheckIconDuotone";
export { CheckIconDuotone };
