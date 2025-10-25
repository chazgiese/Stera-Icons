import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleFourIconFilltone = memo(
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
          <path d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
        </g>
        <path
          fill="currentColor"
          d="M17.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"
        />
      </svg>
    ))
);
CircleFourIconFilltone.displayName = "CircleFourIconFilltone";
export { CircleFourIconFilltone };
