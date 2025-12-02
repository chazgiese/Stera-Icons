import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarRowIconFilltone = memo(
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
          <path d="M16.75 16c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v-5zM12.75 9.5c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v-5zM20.75 3c.69 0 1.25.56 1.25 1.25v2.5C22 7.44 21.44 8 20.75 8H5V3z" />
        </g>
        <path
          fill="currentColor"
          d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChartBarRowIconFilltone.displayName = "ChartBarRowIconFilltone";
export { ChartBarRowIconFilltone };
