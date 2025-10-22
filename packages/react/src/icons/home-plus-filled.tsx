import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomePlusIconFilled = memo(
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
          d="M8.93 3.122a5 5 0 0 1 6.14 0l5 3.889A5 5 0 0 1 22 10.957v6.044a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044a5 5 0 0 1 1.93-3.946zM12 9.001a1 1 0 0 0-1 1v2H9a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-2a1 1 0 0 0-1-1"
        />
        <path
          fill="currentColor"
          d="M8.93 3.121a5 5 0 0 1 6.14 0l5 3.889A5 5 0 0 1 22 10.956V17a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-6.044A5 5 0 0 1 3.93 7.01zM12 9a1 1 0 0 0-1 1v2H9a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
        />
      </svg>
    ))
);
HomePlusIconFilled.displayName = "HomePlusIconFilled";
export { HomePlusIconFilled };
