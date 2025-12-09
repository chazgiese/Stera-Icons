import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingIconLinetone = memo(
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
          <path d="M7.5 13H5a1 1 0 1 1 0-2h2.5zM14 11a1 1 0 1 1 0 2H9.5v-2z" />
        </g>
        <path
          fill="currentColor"
          d="M11.978 1.908c2.417-.361 5.18.746 6.88 3.578a1 1 0 1 1-1.715 1.028c-1.301-2.168-3.288-2.865-4.87-2.629C10.688 4.122 9.5 5.262 9.5 7v10c0 1.255-.63 2.261-1.334 3H19a1 1 0 0 1 0 2H5a1 1 0 0 1-.393-1.92l.02-.008.09-.043a7.868 7.868 0 0 0 1.414-.878c.814-.64 1.369-1.38 1.37-2.15V7c0-2.872 2.061-4.732 4.477-5.093"
        />
      </svg>
    ))
);
PoundSterlingIconLinetone.displayName = "PoundSterlingIconLinetone";
export { PoundSterlingIconLinetone };
