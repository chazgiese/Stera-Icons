import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleIconFill = memo(
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
          d="M10.367 2.395a4 4 0 0 1 3.267 0c.7.314 1.223.897 1.705 1.586.486.694 1.024 1.638 1.697 2.816l3.729 6.525.89 1.578c.26.473.481.896.655 1.277.345.758.58 1.497.498 2.253a4 4 0 0 1-1.63 2.809c-.616.446-1.374.61-2.203.686-.834.076-1.908.075-3.246.075H8.272c-1.339 0-2.412.001-3.246-.075-.83-.076-1.587-.24-2.203-.686a4 4 0 0 1-1.63-2.809c-.082-.756.152-1.495.498-2.253.347-.761.88-1.693 1.545-2.855l3.728-6.525c.673-1.178 1.212-2.122 1.697-2.816.483-.689 1.006-1.272 1.706-1.586"
        />
      </svg>
    ))
);
TriangleIconFill.displayName = "TriangleIconFill";
export { TriangleIconFill };
