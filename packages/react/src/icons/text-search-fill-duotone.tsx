import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextSearchIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM8 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 8.5a5 5 0 0 1 4.549 7.074l1.688 1.689a1.75 1.75 0 1 1-2.474 2.474l-1.689-1.688A5 5 0 1 1 15.5 8.5m0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TextSearchIconFillDuotone.displayName = "TextSearchIconFillDuotone";
export { TextSearchIconFillDuotone };
