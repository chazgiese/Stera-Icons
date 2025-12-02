import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarRowIconFilled = memo(
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
          d="M4 1a1 1 0 0 1 1 1v1h15.75c.69 0 1.25.56 1.25 1.25v2.5C22 7.44 21.44 8 20.75 8H5v1.5h7.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5V16h11.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25H5v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChartBarRowIconFilled.displayName = "ChartBarRowIconFilled";
export { ChartBarRowIconFilled };
