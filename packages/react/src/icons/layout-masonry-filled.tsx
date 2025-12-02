import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayoutMasonryIconFilled = memo(
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
          d="M8.75 15.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2zM19.75 11.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5a2 2 0 0 1 2-2zM8.75 2.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5a2 2 0 0 1 2-2zM19.75 2.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
LayoutMasonryIconFilled.displayName = "LayoutMasonryIconFilled";
export { LayoutMasonryIconFilled };
