import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StairsIconDuotone = memo(
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
          <path d="M2.75 16.832c0 .414.336.75.75.75h.75V22.5a.75.75 0 0 1-1.5 0z" />
          <path
            fillRule="evenodd"
            d="M10.156 17.583h.011z"
            clipRule="evenodd"
          />
          <path d="M16.083 3.5c0 .414.336.75.75.75h.75v5.917a.75.75 0 0 0-.75-.749h-.75zM10.167 10.918a.75.75 0 0 1-.75-.75v5.914h.75c.414 0 .75.337.75.751v-5.915z" />
        </g>
        <path
          fill="currentColor"
          d="M10.167 16.082a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5zM16.833 9.418a.75.75 0 0 1 0 1.5h-6.666a.75.75 0 0 1 0-1.5zM22.5 2.75a.75.75 0 0 1 0 1.5h-5.667a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
StairsIconDuotone.displayName = "StairsIconDuotone";
export { StairsIconDuotone };
