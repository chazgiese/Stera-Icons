import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StairsIconLinetone = memo(
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
          <path d="M2.5 16.832a1 1 0 0 0 1 1h1V22.5a1 1 0 1 1-2 0zM10.188 9.168h-.021a1 1 0 1 0 0 2h1v5.665a1 1 0 0 1-1 1l-.02-.001.02.001a1 1 0 0 0 0-2.001h-1v-5.664a1 1 0 0 1 1-1zM15.833 3.5a1 1 0 0 0 1 1h1v5.648a1 1 0 0 0-.999-.98h-1.001z" />
        </g>
        <path
          fill="currentColor"
          d="M10.167 15.832a1 1 0 0 1 0 2H3.5a1 1 0 1 1 0-2zM16.834 9.168a1 1 0 0 1 0 2h-6.667a1 1 0 1 1 0-2zM22.5 2.5a1 1 0 0 1 0 2h-5.667a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
StairsIconLinetone.displayName = "StairsIconLinetone";
export { StairsIconLinetone };
