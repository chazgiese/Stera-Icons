import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilLineIconLinetone = memo(
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
          <path d="M2.219 21.623q.035.044.074.083a1 1 0 0 0 .807.288l5-.5a1 1 0 0 0 .607-.288L9.913 20H21a1 1 0 1 1 0 2H3a1 1 0 0 1-.781-.377M2.007 21.12" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.41 1.677a2.25 2.25 0 0 1 3.18 0l2.733 2.732a2.25 2.25 0 0 1 0 3.182L8.707 21.206a1 1 0 0 1-.607.288l-5 .5A1 1 0 0 1 2.005 20.9l.5-5 .032-.17c.046-.164.134-.316.256-.438zM4.458 16.453l-.343 3.43 3.429-.344 9.54-9.54-3.086-3.086zM18.177 3.091a.25.25 0 0 0-.354 0l-2.409 2.41L18.5 8.585l2.41-2.409a.25.25 0 0 0 0-.353z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilLineIconLinetone.displayName = "PencilLineIconLinetone";
export { PencilLineIconLinetone };
