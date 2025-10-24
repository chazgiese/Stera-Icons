import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WarehouseIconFilled = memo(
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
          d="M15 15a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2zM15 12a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.658 2.55a3 3 0 0 1 2.684 0l8 4A3 3 0 0 1 23 9.234v8.764a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.234c0-1.136.642-2.175 1.658-2.684zM8.25 10A2.25 2.25 0 0 0 6 12.25V18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5.75A2.25 2.25 0 0 0 15.75 10z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M15 15a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2zM15 12a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.658 2.551a3 3 0 0 1 2.684 0l8 4A3 3 0 0 1 23 9.235v8.763a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.235c0-1.136.642-2.176 1.658-2.684zM8.25 10A2.25 2.25 0 0 0 6 12.25V18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5.75A2.25 2.25 0 0 0 15.75 10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WarehouseIconFilled.displayName = "WarehouseIconFilled";
export { WarehouseIconFilled };
