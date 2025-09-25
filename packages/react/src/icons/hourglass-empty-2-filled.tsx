import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassEmpty2Filled = memo(
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
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3zm-5 12.911c-.383 0-.814.129-1.15.44l-.14.146c-.496.592-1.123 1.035-1.897 1.653a3.5 3.5 0 0 0-1.271 2.197A1 1 0 0 0 8.53 19.5h6.94a1 1 0 0 0 .988-1.153 3.5 3.5 0 0 0-1.271-2.197c-.677-.541-1.242-.948-1.706-1.438l-.192-.215-.139-.145a1.7 1.7 0 0 0-1.15-.44"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HourglassEmpty2Filled.displayName = "HourglassEmpty2Filled";
export { HourglassEmpty2Filled };
