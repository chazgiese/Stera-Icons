import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleIconLinetone = memo(
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
          d="M20.004 19.62a1 1 0 1 1 1.173 1.62c-.616.446-1.374.609-2.203.685-.834.076-1.907.075-3.245.075H8.272c-1.339 0-2.412.002-3.246-.075-.83-.076-1.588-.24-2.204-.686a1 1 0 0 1 1.174-1.619c.172.124.487.247 1.212.314C5.93 20 6.894 20 8.272 20h7.457c1.377 0 2.341 0 3.062-.066.726-.067 1.042-.19 1.213-.314"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.367 2.395a4 4 0 0 1 3.266 0c.7.314 1.223.897 1.705 1.586.486.694 1.025 1.638 1.697 2.816l3.729 6.525c.664 1.162 1.198 2.094 1.545 2.856.345.757.58 1.496.498 2.253a4 4 0 0 1-1.63 2.808 1 1 0 0 1-1.174-1.619c.458-.332.755-.842.816-1.404.022-.21-.028-.545-.33-1.208-.3-.659-.778-1.497-1.461-2.694L15.299 7.79c-.693-1.212-1.179-2.061-1.6-2.662-.423-.605-.689-.82-.882-.906a2 2 0 0 0-1.634 0c-.194.086-.46.3-.883.906-.42.6-.907 1.45-1.6 2.662l-3.728 6.524c-.684 1.197-1.162 2.035-1.462 2.694-.302.663-.352.997-.33 1.208.062.562.358 1.072.815 1.404a1 1 0 1 1-1.172 1.62 4 4 0 0 1-1.63-2.81c-.082-.756.152-1.495.498-2.252.347-.762.88-1.694 1.544-2.856l3.73-6.525c.672-1.178 1.21-2.122 1.696-2.816.483-.689 1.006-1.272 1.706-1.586"
        />
      </svg>
    ))
);
TriangleIconLinetone.displayName = "TriangleIconLinetone";
export { TriangleIconLinetone };
