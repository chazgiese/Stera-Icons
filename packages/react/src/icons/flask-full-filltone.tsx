import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlaskFullIconFilltone = memo(
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
        <path
          fill="currentColor"
          d="M14 1a1 1 0 0 1 1 1v6.853a3 3 0 0 0 .456 1.59l4.98 7.967c1.248 1.998-.188 4.59-2.544 4.59H6.109c-2.357 0-3.793-2.592-2.544-4.59l4.98-7.968A3 3 0 0 0 9 8.852V2a1 1 0 0 1 1-1z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M11.704 13.995a4.9 4.9 0 0 1 3.413-.774l.113.016 3.652 6.26a1 1 0 0 1-.864 1.504H5.983a1 1 0 0 1-.865-1.504l3.216-5.513.616.264a2.9 2.9 0 0 0 2.754-.253M15.5 1a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
FlaskFullIconFilltone.displayName = "FlaskFullIconFilltone";
export { FlaskFullIconFilltone };
