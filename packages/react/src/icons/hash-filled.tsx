import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashFilled = memo(
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
          d="M15 2a1.5 1.5 0 0 1 1.5 1.5v4h4a1.5 1.5 0 0 1 0 3h-4v3h4a1.5 1.5 0 0 1 0 3h-4v4a1.5 1.5 0 0 1-3 0v-4h-3v4a1.5 1.5 0 0 1-3 0v-4h-4a1.5 1.5 0 0 1 0-3h4v-3h-4a1.5 1.5 0 0 1 0-3h4v-4a1.5 1.5 0 1 1 3 0v4h3v-4A1.5 1.5 0 0 1 15 2m-4.5 11.5h3v-3h-3z"
        />
      </svg>
    ))
);
HashFilled.displayName = "HashFilled";
export { HashFilled };
