import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleIconDuotone = memo(
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
          <path d="M8.47 14.47a.75.75 0 1 1 1.06 1.06l-4.72 4.72H3.75v-1.06zM20.25 3.75v1.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72z" />
        </g>
        <path
          fill="currentColor"
          d="M3 14.25a.75.75 0 0 1 .75.75v5.25H9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75M21 2.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V3.75H15a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ExpandSimpleIconDuotone.displayName = "ExpandSimpleIconDuotone";
export { ExpandSimpleIconDuotone };
