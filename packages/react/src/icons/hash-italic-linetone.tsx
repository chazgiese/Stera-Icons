import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashItalicIconLinetone = memo(
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
          d="M19 14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 8a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.977 21.217a1.001 1.001 0 0 1-1.953-.434L7.087 16h2.05zM13.977 21.217a1.001 1.001 0 0 1-1.953-.434L13.087 16h2.05zM9.58 14H7.533l.888-4h2.05zM15.58 14h-2.048l.888-4h2.05zM10.024 2.784a1 1 0 0 1 1.953.433L10.915 8h-2.05zM16.024 2.784a1 1 0 0 1 1.953.433L16.915 8h-2.05z" />
        </g>
      </svg>
    ))
);
HashItalicIconLinetone.displayName = "HashItalicIconLinetone";
export { HashItalicIconLinetone };
