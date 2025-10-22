import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideCrossIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M11 13v9.952A11 11 0 0 1 1.047 13zM13 1.047A11 11 0 0 1 22.953 11H13z" />
        </g>
        <path
          fill="currentColor"
          d="M22.953 13A11 11 0 0 1 13 22.952V13zM11 11H1.047A11 11 0 0 1 11 1.047z"
        />
      </svg>
    ))
);
CircleDivideCrossIconFilltone.displayName = "CircleDivideCrossIconFilltone";
export { CircleDivideCrossIconFilltone };
