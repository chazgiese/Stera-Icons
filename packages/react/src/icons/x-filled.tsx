import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XIconFilled = memo(
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
          d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.122 12l5.94 5.94a1.5 1.5 0 0 1-2.121 2.12L12 14.121l-5.94 5.94a1.5 1.5 0 1 1-2.12-2.122L9.879 12 3.939 6.06a1.5 1.5 0 1 1 2.122-2.12L12 9.878z"
        />
      </svg>
    ))
);
XIconFilled.displayName = "XIconFilled";
export { XIconFilled };
