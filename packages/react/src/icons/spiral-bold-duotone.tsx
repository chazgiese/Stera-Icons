import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpiralIconBoldDuotone = memo(
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
          <path d="M3 13a7 7 0 1 0 14 0h2a9 9 0 1 1-18 0z" />
          <path d="M7 13a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z" />
        </g>
        <path
          fill="currentColor"
          d="M12 10a3 3 0 0 1 3 3h-2a1 1 0 0 0-1.995-.102l-.01.204A1 1 0 0 1 9 13a3 3 0 0 1 3-3"
        />
        <path
          fill="currentColor"
          d="M12 2c6.075 0 11 4.925 11 11a1 1 0 1 1-2 0 9 9 0 1 0-18 0H1C1 6.925 5.925 2 12 2"
        />
        <path
          fill="currentColor"
          d="M12 6a7 7 0 0 1 7 7h-2a5 5 0 0 0-10 0H5a7 7 0 0 1 7-7"
        />
      </svg>
    ))
);
SpiralIconBoldDuotone.displayName = "SpiralIconBoldDuotone";
export { SpiralIconBoldDuotone };
