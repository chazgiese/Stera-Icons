import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextSearchIconDuotone = memo(
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
          <path d="M8 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM8 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 9.25a4.25 4.25 0 0 1 3.628 6.464l2.079 2.079a1 1 0 1 1-1.414 1.414l-2.08-2.08A4.25 4.25 0 1 1 15.5 9.25m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TextSearchIconDuotone.displayName = "TextSearchIconDuotone";
export { TextSearchIconDuotone };
