import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveSquareIconDuotone = memo(
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
          d="M22 11.25a.75.75 0 0 1 .75.75v6.75a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2V12h1.5v6.75a.5.5 0 0 0 .5.5h7.5a.5.5 0 0 0 .5-.5V12a.75.75 0 0 1 .75-.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.75 3.25a2 2 0 0 1 2 2V12h-1.5V5.25a.5.5 0 0 0-.5-.5h-7.5a.5.5 0 0 0-.5.5V12a.75.75 0 0 1-1.5 0V5.25a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
WaveSquareIconDuotone.displayName = "WaveSquareIconDuotone";
export { WaveSquareIconDuotone };
