import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XIconFilltone = memo(
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
          <path d="m12 14.121-5.94 5.94a1.5 1.5 0 0 1-2.12-2.121L9.88 12zM17.94 3.94a1.5 1.5 0 0 1 2.12 2.12L14.122 12l-2.12-2.12z" />
        </g>
        <path
          fill="currentColor"
          d="M3.94 3.94a1.5 1.5 0 0 1 2.12 0l14 14a1.5 1.5 0 1 1-2.12 2.12l-14-14a1.5 1.5 0 0 1 0-2.12"
        />
      </svg>
    ))
);
XIconFilltone.displayName = "XIconFilltone";
export { XIconFilltone };
