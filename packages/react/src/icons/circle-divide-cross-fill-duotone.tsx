import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideCrossIconFillDuotone = memo(
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
          <path d="M11 13v9.953A11 11 0 0 1 1.047 13zM22.953 13A11 11 0 0 1 13 22.953V13zM11 11H1.047A11 11 0 0 1 11 1.046zM13 1.046A11 11 0 0 1 22.953 11H13z" />
        </g>
        <path
          fill="currentColor"
          d="M12 1q.505 0 1 .045V11h9.955a11 11 0 0 1 0 2H13v9.955a11 11 0 0 1-2 0V13H1.045a11 11 0 0 1 0-2H11V1.045Q11.495 1 12 1"
        />
      </svg>
    ))
);
CircleDivideCrossIconFillDuotone.displayName =
  "CircleDivideCrossIconFillDuotone";
export { CircleDivideCrossIconFillDuotone };
