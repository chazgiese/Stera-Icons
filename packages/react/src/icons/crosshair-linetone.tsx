import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CrosshairIconLinetone = memo(
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
          <path d="M6.085 13A6 6 0 0 0 11 17.915v2.02A8 8 0 0 1 4.064 13zM19.936 13A8 8 0 0 1 13 19.936v-2.021A6 6 0 0 0 17.915 13zM13 4.063A8 8 0 0 1 19.936 11h-2.021A6 6 0 0 0 13 6.084zM11 6.084A6 6 0 0 0 6.085 11h-2.02A8 8 0 0 1 11 4.063z" />
        </g>
        <path
          fill="currentColor"
          d="M12 1a1 1 0 0 1 1 1v9h9a1 1 0 1 1 0 2h-9v9a1 1 0 1 1-2 0v-9H2a1 1 0 1 1 0-2h9V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CrosshairIconLinetone.displayName = "CrosshairIconLinetone";
export { CrosshairIconLinetone };
