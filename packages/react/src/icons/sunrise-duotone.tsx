import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SunriseIconDuotone = memo(
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
          <path d="M14 20.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM18 16.917a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM22 13.583a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2.25A8.75 8.75 0 0 1 20.75 11a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75A8.75 8.75 0 0 1 12 2.25m0 1.5a7.25 7.25 0 0 0-7.212 6.5h14.424A7.25 7.25 0 0 0 12 3.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SunriseIconDuotone.displayName = "SunriseIconDuotone";
export { SunriseIconDuotone };
