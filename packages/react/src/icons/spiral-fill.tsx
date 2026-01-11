import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpiralIconFill = memo(
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
          d="M12 1.5c6.351 0 11.5 5.149 11.5 11.5a1.5 1.5 0 0 1-3 0 8.5 8.5 0 0 0-17 0 6.5 6.5 0 1 0 13 0 4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 1-3 0 3.5 3.5 0 1 1 7 0 5.5 5.5 0 1 1-11 0 7.5 7.5 0 1 1 15 0 9.5 9.5 0 0 1-19 0C.5 6.649 5.649 1.5 12 1.5"
        />
      </svg>
    ))
);
SpiralIconFill.displayName = "SpiralIconFill";
export { SpiralIconFill };
