import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpiralIconBold = memo(
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
          d="M12 2c6.075 0 11 4.925 11 11a1 1 0 1 1-2 0 9 9 0 1 0-18 0 7 7 0 1 0 14 0 5 5 0 0 0-10 0 3 3 0 1 0 6 0 1 1 0 0 0-1.995-.102l-.01.204A1 1 0 0 1 9 13a3 3 0 1 1 6 0 5 5 0 0 1-10 0 7 7 0 0 1 14 0 9 9 0 1 1-18 0C1 6.925 5.925 2 12 2"
        />
      </svg>
    ))
);
SpiralIconBold.displayName = "SpiralIconBold";
export { SpiralIconBold };
