import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpiralIcon = memo(
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
          d="M12 2.25c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0 9.25 9.25 0 0 0-18.5 0 7.25 7.25 0 1 0 14.5 0 5.25 5.25 0 1 0-10.5 0 3.25 3.25 0 0 0 6.5 0 1.25 1.25 0 1 0-2.5 0 .75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 5.5 0 4.75 4.75 0 1 1-9.5 0 6.75 6.75 0 0 1 13.5 0 8.75 8.75 0 1 1-17.5 0C1.25 7.063 6.063 2.25 12 2.25"
        />
      </svg>
    ))
);
SpiralIcon.displayName = "SpiralIcon";
export { SpiralIcon };
