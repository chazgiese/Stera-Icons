import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineBottleLabelFilled = memo(
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
          d="M16.25 21a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-1.5h8.5zM16.25 17.5h-8.5V14h8.5zM12.853 1.005A1 1 0 0 1 13.75 2v5.646A3.5 3.5 0 0 1 16.25 11v1h-8.5v-1a3.5 3.5 0 0 1 2.5-3.354V2a1 1 0 0 1 1-1h1.5z"
        />
      </svg>
    ))
);
WineBottleLabelFilled.displayName = "WineBottleLabelFilled";
export { WineBottleLabelFilled };
