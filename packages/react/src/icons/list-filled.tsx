import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListFilled = memo(
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
          d="M4.103 16.005A1 1 0 0 1 5 17v2l-.005.102A1 1 0 0 1 4 20H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2zM22 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM4.103 10.005A1 1 0 0 1 5 11v2l-.005.102A1 1 0 0 1 4 14H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2zM22 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM4.103 4.005A1 1 0 0 1 5 5v2l-.005.103A1 1 0 0 1 4 8H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2zM22 5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ListFilled.displayName = "ListFilled";
export { ListFilled };
