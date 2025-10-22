import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpDownIconLinetone = memo(
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
        <path fill="currentColor" d="M13 22h-2V2h2z" opacity={0.32} />
        <path
          fill="currentColor"
          d="M15.793 16.793a1 1 0 0 1 1.414 1.414l-4.5 4.5a1 1 0 0 1-1.338.068l-.076-.068-4.5-4.5a1 1 0 1 1 1.414-1.414L12 20.586zM12 1a1 1 0 0 1 .707.293l4.5 4.5a1 1 0 1 1-1.414 1.414L12 3.414 8.207 7.207a1 1 0 1 1-1.414-1.414l4.5-4.5.073-.066A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
ArrowUpDownIconLinetone.displayName = "ArrowUpDownIconLinetone";
export { ArrowUpDownIconLinetone };
