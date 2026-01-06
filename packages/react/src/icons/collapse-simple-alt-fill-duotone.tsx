import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIconFillDuotone = memo(
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
          <path d="m17.5 18.914 2.793 2.793a1 1 0 0 0 1.414-1.414L18.914 17.5zM3.707 2.293a1 1 0 1 0-1.414 1.414L5.086 6.5 6.5 5.086z" />
        </g>
        <path
          fill="currentColor"
          d="M15 14a1 1 0 0 0-1 1v5a1 1 0 0 0 1.707.707l5-5A1 1 0 0 0 20 14zM9.383 3.076a1 1 0 0 0-1.09.217l-5 5A1 1 0 0 0 4 10h5a1 1 0 0 0 1-1V4a1 1 0 0 0-.617-.924"
        />
      </svg>
    ))
);
CollapseSimpleAltIconFillDuotone.displayName =
  "CollapseSimpleAltIconFillDuotone";
export { CollapseSimpleAltIconFillDuotone };
