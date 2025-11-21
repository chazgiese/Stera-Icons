import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextSearchIconLinetone = memo(
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
          <path d="M8.103 17.005a1 1 0 0 1 0 1.99L8 19H3a1 1 0 1 1 0-2h5zM8.103 11.005a1 1 0 0 1 0 1.99L8 13H3a1 1 0 1 1 0-2h5zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 9a4.5 4.5 0 0 1 3.809 6.895l1.898 1.898a1 1 0 1 1-1.414 1.414l-1.898-1.898A4.5 4.5 0 1 1 15.5 9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TextSearchIconLinetone.displayName = "TextSearchIconLinetone";
export { TextSearchIconLinetone };
