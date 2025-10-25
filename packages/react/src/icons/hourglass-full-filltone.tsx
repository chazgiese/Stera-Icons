import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassFullIconFilltone = memo(
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
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.578 4.506a1 1 0 0 1 .88 1.147 3.5 3.5 0 0 1-1.272 2.197l-1.284 1.027c-.437.35-.777.767-1.022 1.22a1 1 0 0 1-1.76 0 4 4 0 0 0-1.022-1.22L8.813 7.85a3.5 3.5 0 0 1-1.271-2.197A1 1 0 0 1 8.53 4.5h6.94z"
        />
      </svg>
    ))
);
HourglassFullIconFilltone.displayName = "HourglassFullIconFilltone";
export { HourglassFullIconFilltone };
