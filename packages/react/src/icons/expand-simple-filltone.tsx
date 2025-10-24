import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M8.293 14.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414zM20.293 2.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M2.617 14.076a1 1 0 0 1 1.09.217l6 6A1 1 0 0 1 9 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 .617-.924M21 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1.707.707l-6-6A1 1 0 0 1 15 2z"
        />
      </svg>
    ))
);
ExpandSimpleIconFilltone.displayName = "ExpandSimpleIconFilltone";
export { ExpandSimpleIconFilltone };
