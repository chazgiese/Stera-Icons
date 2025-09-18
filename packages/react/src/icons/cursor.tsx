import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Cursor = memo(
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
          fillRule="evenodd"
          d="M3.35 4.744c-.494-1.48.914-2.888 2.394-2.395l15.711 5.237c1.759.586 1.714 3.09-.064 3.612l-7.104 2.09-2.089 7.103c-.523 1.778-3.024 1.823-3.611.065zm1.92-.971a.393.393 0 0 0-.497.497l5.237 15.712a.393.393 0 0 0 .75-.014l2.204-7.496a.75.75 0 0 1 .508-.508l7.496-2.204a.393.393 0 0 0 .014-.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Cursor.displayName = "Cursor";
export { Cursor };
