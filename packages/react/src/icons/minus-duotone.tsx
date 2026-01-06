import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MinusIconDuotone = memo(
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
          d="M21 11.25a.75.75 0 0 1 0 1.5h-9v-1.5z"
          opacity={0.4}
        />
        <path fill="currentColor" d="M12 12.75H3a.75.75 0 0 1 0-1.5h9z" />
      </svg>
    ))
);
MinusIconDuotone.displayName = "MinusIconDuotone";
export { MinusIconDuotone };
