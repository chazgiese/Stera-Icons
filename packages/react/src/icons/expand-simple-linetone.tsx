import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleIconLinetone = memo(
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
          <path d="M8.293 14.293a1 1 0 1 1 1.414 1.414L5.414 20H4v-1.414zM20 4v1.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L18.586 4z" />
        </g>
        <path
          fill="currentColor"
          d="M3 14a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2H3l-.103-.005A1 1 0 0 1 2 21v-6a1 1 0 0 1 1-1M21.103 2.005A1 1 0 0 1 22 3v6a1 1 0 1 1-2 0V4h-5a1 1 0 1 1 0-2h6z"
        />
      </svg>
    ))
);
ExpandSimpleIconLinetone.displayName = "ExpandSimpleIconLinetone";
export { ExpandSimpleIconLinetone };
