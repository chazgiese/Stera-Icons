import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PilcrowIconDuotone = memo(
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
          <path d="M13.75 20a.75.75 0 0 1-1.5 0V4.75h1.5zM17.75 20a.75.75 0 0 1-1.5 0V4.75h1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M19 3.25a.75.75 0 0 1 0 1.5h-9a4.25 4.25 0 0 0 0 8.5h2.25v1.5H10a5.75 5.75 0 0 1 0-11.5z"
        />
      </svg>
    ))
);
PilcrowIconDuotone.displayName = "PilcrowIconDuotone";
export { PilcrowIconDuotone };
