import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIconFilled = memo(
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
          d="M15.707 14.293a1 1 0 1 0-1.414 1.414l2.793 2.793-1.793 1.793A1 1 0 0 0 16 22h5q.085-.001.166-.016.015-.001.031-.005l.034-.007.062-.016a1 1 0 0 0 .257-.121c.137-.09.251-.215.33-.36l.02-.042a1 1 0 0 0 .057-.141A1 1 0 0 0 22 21v-5a1 1 0 0 0-1.707-.707L18.5 17.086zM3 2q-.084 0-.165.015l-.026.004-.01.002-.03.006-.061.016a1 1 0 0 0-.135.054l-.048.023a1 1 0 0 0-.481.587l-.014.053A1 1 0 0 0 2 3v5a1 1 0 0 0 1.707.707L5.5 6.914l2.793 2.793a1 1 0 1 0 1.414-1.414L6.914 5.5l1.793-1.793A1 1 0 0 0 8 2z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconFilled.displayName = "ExpandSimpleAltIconFilled";
export { ExpandSimpleAltIconFilled };
