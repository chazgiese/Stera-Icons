import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WarehouseIconBold = memo(
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
          d="M10.658 2.553a3 3 0 0 1 2.684 0l8 4A3 3 0 0 1 23 9.236V18a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.236a3 3 0 0 1 1.658-2.684zm1.79 1.789a1 1 0 0 0-.895 0l-8 4A1 1 0 0 0 3 9.236V18a1 1 0 0 0 1 1h2v-6.75A2.25 2.25 0 0 1 8.25 10h7.5A2.25 2.25 0 0 1 18 12.25V19h2a1 1 0 0 0 1-1V9.236a1 1 0 0 0-.553-.894zM8 18v1h8v-1zm0-2h8v-1H8zm.25-4a.25.25 0 0 0-.25.25V13h8v-.75a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.658 2.551a3 3 0 0 1 2.684 0l8 4A3 3 0 0 1 23 9.235v8.763a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.235c0-1.137.642-2.176 1.658-2.684zm1.79 1.79a1 1 0 0 0-.895 0l-8 4A1 1 0 0 0 3 9.234v8.763a1 1 0 0 0 1 1h2v-6.75a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v6.75h2a1 1 0 0 0 1-1V9.235a1 1 0 0 0-.553-.895zM8 17.997v1h8v-1zm0-2h8v-1H8zm.25-4a.25.25 0 0 0-.25.25v.75h8v-.75a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WarehouseIconBold.displayName = "WarehouseIconBold";
export { WarehouseIconBold };
