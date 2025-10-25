import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CloudIconLinetone = memo(
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
        <path fill="currentColor" d="M18 20H5v-2h13z" opacity={0.4} />
        <path
          fill="currentColor"
          d="M12 4a7 7 0 0 1 6.327 4.009A6 6 0 0 1 18 20v-2a4 4 0 1 0-.273-7.99 1 1 0 0 1-1.01-.666A5.001 5.001 0 0 0 7 11l.003.105a1 1 0 0 1-1.25.989A3 3 0 1 0 5 18v2a5 5 0 0 1 0-10l.071.002A7 7 0 0 1 12 4"
        />
      </svg>
    ))
);
CloudIconLinetone.displayName = "CloudIconLinetone";
export { CloudIconLinetone };
