import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WarehouseIconBoldDuotone = memo(
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
          d="M10.658 2.552a3 3 0 0 1 2.684 0l8 4A3 3 0 0 1 23 9.236V18a3 3 0 0 1-3 3h-2v-2h2a1 1 0 0 0 1-1V9.236a1 1 0 0 0-.553-.894l-8-4a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 3 9.236V18a1 1 0 0 0 1 1h2v2H4a3 3 0 0 1-3-3V9.236c0-1.136.642-2.175 1.658-2.684z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.75 10A2.25 2.25 0 0 1 18 12.25V21H6v-8.75A2.25 2.25 0 0 1 8.25 10zM8 18v1h8v-1zm0-2h8v-1H8zm.25-4a.25.25 0 0 0-.25.25V13h8v-.75a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WarehouseIconBoldDuotone.displayName = "WarehouseIconBoldDuotone";
export { WarehouseIconBoldDuotone };
