import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandIconDuotone = memo(
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
          <path d="M14.47 14.47a.75.75 0 0 1 1.06 0l3.72 3.72v1.06h-1.06l-3.72-3.72a.75.75 0 0 1 0-1.06M8.47 14.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72H4.75v-1.06zM9.53 8.47a.75.75 0 1 1-1.06 1.06L4.75 5.81V4.75h1.06zM19.25 4.75v1.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72z" />
        </g>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 4h4v4M8 20H4v-4m0-8V4h4m12 12v4h-4"
        />
      </svg>
    ))
);
ExpandIconDuotone.displayName = "ExpandIconDuotone";
export { ExpandIconDuotone };
