import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlusIconFillDuotone = memo(
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
          d="M12 2.5A1.5 1.5 0 0 1 13.5 4v16a1.5 1.5 0 0 1-3 0V4A1.5 1.5 0 0 1 12 2.5"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M10.5 13.5H4a1.5 1.5 0 0 1 0-3h6.5zM20 10.5a1.5 1.5 0 0 1 0 3h-6.5v-3z" />
        </g>
      </svg>
    ))
);
PlusIconFillDuotone.displayName = "PlusIconFillDuotone";
export { PlusIconFillDuotone };
