import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertTriangleIconFilled = memo(
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
          fillRule="evenodd"
          d="M10.366 2.396a4 4 0 0 1 3.268 0c.7.313 1.222.897 1.705 1.586.485.694 1.024 1.637 1.697 2.815l3.728 6.526.891 1.578q.392.708.654 1.277c.346.758.58 1.497.498 2.253a4 4 0 0 1-1.63 2.808c-.616.447-1.374.61-2.203.686-.834.076-1.907.075-3.246.075H8.271c-1.338 0-2.412.002-3.246-.075-.829-.076-1.587-.24-2.203-.686a4 4 0 0 1-1.63-2.808c-.082-.756.153-1.495.498-2.253.348-.762.881-1.694 1.545-2.856l3.729-6.525C7.637 5.62 8.175 4.676 8.66 3.982c.482-.69 1.005-1.273 1.705-1.586M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7a1 1 0 0 0-1 1v3l.005.103a1 1 0 0 0 1.99 0L13 12V9a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AlertTriangleIconFilled.displayName = "AlertTriangleIconFilled";
export { AlertTriangleIconFilled };
