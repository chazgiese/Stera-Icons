import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListSimpleIconFillDuotone = memo(
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
          <path d="M21.5 14a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 0 1 0-3zM21.5 7a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 1 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          d="M5 13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM5 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ListSimpleIconFillDuotone.displayName = "ListSimpleIconFillDuotone";
export { ListSimpleIconFillDuotone };
