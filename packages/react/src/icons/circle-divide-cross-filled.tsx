import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideCrossIconFilled = memo(
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
          d="M11 22.952A11 11 0 0 1 1.047 13H11zM22.953 13A11 11 0 0 1 13 22.952V13zM11 11H1.047A11 11 0 0 1 11 1.047zM13 1.047A11 11 0 0 1 22.953 11H13z"
        />
      </svg>
    ))
);
CircleDivideCrossIconFilled.displayName = "CircleDivideCrossIconFilled";
export { CircleDivideCrossIconFilled };
