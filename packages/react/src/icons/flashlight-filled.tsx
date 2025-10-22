import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlashlightIconFilled = memo(
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
          d="M17.75 6.343c0 1.26-.5 2.468-1.392 3.36l-.156.155a3.25 3.25 0 0 0-.952 2.3V20a2.75 2.75 0 0 1-2.75 2.75h-1A2.75 2.75 0 0 1 8.75 20v-7.843c0-.862-.343-1.69-.952-2.299l-.156-.156a4.75 4.75 0 0 1-1.392-3.36V5.75h11.5zM12 11a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M15.5 1.25a2.25 2.25 0 0 1 2.25 2.25v.75H6.25V3.5A2.25 2.25 0 0 1 8.5 1.25z"
        />
      </svg>
    ))
);
FlashlightIconFilled.displayName = "FlashlightIconFilled";
export { FlashlightIconFilled };
