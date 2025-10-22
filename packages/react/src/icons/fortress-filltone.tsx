import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FortressIconFilltone = memo(
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
          d="M4.14 3.01a1 1 0 0 1 .755.543L5.618 5h.764l.723-1.447.072-.121A1 1 0 0 1 8 3h2a1 1 0 0 1 1 1v4h2V4a1 1 0 0 1 1-1h2l.14.01a1 1 0 0 1 .755.543L17.618 5h.764l.723-1.447.072-.121A1 1 0 0 1 20 3h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3a2 2 0 1 0-4 0v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M10 19a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zM23 19a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM6 8.5a1 1 0 0 1 1 1V11a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1M18 8.5a1 1 0 0 1 1 1V11l-.005.102a1 1 0 0 1-1.99 0L17 11V9.5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
FortressIconFilltone.displayName = "FortressIconFilltone";
export { FortressIconFilltone };
