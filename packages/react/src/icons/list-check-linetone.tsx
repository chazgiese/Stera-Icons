import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckIconLinetone = memo(
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
          <path d="M22 17a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M5.268 15.817a1.001 1.001 0 0 1 1.463 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.148l.491.702zM5.268 9.817a1.001 1.001 0 0 1 1.463 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.148l.491.702zM5.268 3.817a1.001 1.001 0 0 1 1.463 1.365l-2.8 3a1 1 0 0 1-1.55-.11L1.18 6.36A1 1 0 0 1 2.819 5.21l.491.702z"
        />
      </svg>
    ))
);
ListCheckIconLinetone.displayName = "ListCheckIconLinetone";
export { ListCheckIconLinetone };
