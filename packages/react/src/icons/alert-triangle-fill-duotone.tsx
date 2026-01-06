import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertTriangleIconFillDuotone = memo(
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
          d="M10.367 2.396a4 4 0 0 1 3.267 0c.7.313 1.223.896 1.705 1.585.486.694 1.024 1.638 1.697 2.816l3.729 6.525.89 1.578c.26.474.481.897.655 1.278.345.757.58 1.496.498 2.253a4 4 0 0 1-1.63 2.808c-.616.447-1.374.61-2.203.686-.834.076-1.908.075-3.246.075H8.272c-1.339 0-2.412.001-3.246-.075-.83-.076-1.587-.24-2.203-.686a4 4 0 0 1-1.63-2.808c-.082-.757.152-1.496.498-2.253.347-.762.88-1.694 1.545-2.856l3.728-6.525c.673-1.178 1.212-2.122 1.697-2.816.483-.689 1.006-1.272 1.706-1.585M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7a1 1 0 0 0-1 1v3l.005.102a1 1 0 0 0 1.99 0L13 12V9a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 8a1 1 0 0 1 1 1v3l-.005.102a1 1 0 0 1-1.99 0L11 12V9a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AlertTriangleIconFillDuotone.displayName = "AlertTriangleIconFillDuotone";
export { AlertTriangleIconFillDuotone };
