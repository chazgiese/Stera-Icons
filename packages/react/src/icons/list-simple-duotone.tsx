import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListSimpleIconDuotone = memo(
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
          <path d="M22 14.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM22 7.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M5 13.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zM5 6.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5z"
        />
      </svg>
    ))
);
ListSimpleIconDuotone.displayName = "ListSimpleIconDuotone";
export { ListSimpleIconDuotone };
