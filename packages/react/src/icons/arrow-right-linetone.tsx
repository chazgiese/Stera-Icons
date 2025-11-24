import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRightIconLinetone = memo(
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
          d="m17.586 12-1 1H5a1 1 0 1 1 0-2h11.586z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L17.586 12l-6.293-6.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowRightIconLinetone.displayName = "ArrowRightIconLinetone";
export { ArrowRightIconLinetone };
