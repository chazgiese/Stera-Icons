import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleIconFilled = memo(
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
          d="M9 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1.707.707L6.5 18.914l-2.793 2.793a1 1 0 0 1-1.414-1.414L5.086 17.5l-1.793-1.793A1 1 0 0 1 4 14zM20.293 2.293a1 1 0 1 1 1.414 1.414L18.914 6.5l1.793 1.793A1 1 0 0 1 20 10h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1.707-.707L17.5 5.086z"
        />
      </svg>
    ))
);
CollapseSimpleIconFilled.displayName = "CollapseSimpleIconFilled";
export { CollapseSimpleIconFilled };
