import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleIconFilled = memo(
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
          d="M10.366 2.395a4 4 0 0 1 3.268 0c.7.314 1.222.897 1.705 1.586.485.694 1.024 1.638 1.697 2.816l3.728 6.525.891 1.578c.26.474.48.897.654 1.278.346.757.58 1.496.498 2.253a4 4 0 0 1-1.63 2.808c-.616.446-1.374.61-2.203.686-.834.076-1.907.075-3.246.075H8.271c-1.338 0-2.412.001-3.246-.075-.829-.076-1.587-.24-2.203-.686a4 4 0 0 1-1.63-2.808c-.082-.757.153-1.496.498-2.253.348-.762.881-1.694 1.545-2.856l3.729-6.525C7.637 5.619 8.175 4.675 8.66 3.98c.482-.689 1.005-1.272 1.705-1.586"
        />
      </svg>
    ))
);
TriangleIconFilled.displayName = "TriangleIconFilled";
export { TriangleIconFilled };
