import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleIconFilled = memo(
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
          d="M8.293 14.293a1 1 0 1 1 1.414 1.414L6.914 18.5l1.793 1.793A1 1 0 0 1 8 22H3q-.085-.001-.166-.016-.015-.001-.031-.005l-.034-.007-.062-.016a1 1 0 0 1-.257-.121 1 1 0 0 1-.33-.36l-.02-.042a1 1 0 0 1-.057-.141A1.003 1.003 0 0 1 2 21v-5a1 1 0 0 1 1.707-.707L5.5 17.086zM21 2q.084 0 .165.015l.026.004.01.002.03.006.061.016a1 1 0 0 1 .135.054l.048.023a1 1 0 0 1 .481.587l.014.053q.03.116.03.24v5a1 1 0 0 1-1.707.707L18.5 6.914l-2.793 2.793a1 1 0 1 1-1.414-1.414L17.086 5.5l-1.793-1.793A1 1 0 0 1 16 2z"
        />
      </svg>
    ))
);
ExpandSimpleIconFilled.displayName = "ExpandSimpleIconFilled";
export { ExpandSimpleIconFilled };
