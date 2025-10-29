import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseIconFilltone = memo(
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
          <path d="m7 18.414-2.293 2.293a1 1 0 0 1-1.414-1.414L5.586 17zM20.707 19.293a1 1 0 0 1-1.414 1.414L17 18.414 18.414 17zM3.293 3.293a1 1 0 0 1 1.414 0L7 5.586 5.586 7 3.293 4.707a1 1 0 0 1 0-1.414M19.293 3.293a1 1 0 0 1 1.414 1.414L18.414 7 17 5.586z" />
        </g>
        <path
          fill="currentColor"
          d="M9 14a1 1 0 0 1 1 1v4a1 1 0 0 1-1.707.707l-4-4A1 1 0 0 1 5 14zM19 14a1 1 0 0 1 .707 1.707l-4 4A1 1 0 0 1 14 19v-4a1 1 0 0 1 1-1zM8.293 4.293A1 1 0 0 1 10 5v4a1 1 0 0 1-1 1H5a1 1 0 0 1-.707-1.707zM14.617 4.076a1 1 0 0 1 1.09.217l4 4A1 1 0 0 1 19 10h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
CollapseIconFilltone.displayName = "CollapseIconFilltone";
export { CollapseIconFilltone };
