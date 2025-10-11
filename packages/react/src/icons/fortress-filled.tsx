import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FortressIconFilled = memo(
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
          d="M4.14 3.01a1 1 0 0 1 .755.543L5.618 5h.764l.723-1.447.072-.121A1 1 0 0 1 8 3h2a1 1 0 0 1 1 1v4h2V4a1 1 0 0 1 1-1h2l.14.01a1 1 0 0 1 .755.543L17.618 5h.764l.723-1.447.072-.121A1 1 0 0 1 20 3h2a1 1 0 0 1 1 1v15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2v-2a2 2 0 1 0-4 0v2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2V4a1 1 0 0 1 1-1h2zM6 8.5a1 1 0 0 0-1 1V11a1 1 0 1 0 2 0V9.5a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1V11l.005.102a1 1 0 0 0 1.99 0L19 11V9.5a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FortressIconFilled.displayName = "FortressIconFilled";
export { FortressIconFilled };
