import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NotebookIconFillDuotone = memo(
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
          d="M16 2c.684 0 1.257-.001 1.724.037.478.04.933.125 1.365.345a3.5 3.5 0 0 1 1.53 1.53c.22.43.305.886.344 1.364C21 5.743 21 6.316 21 7v10c0 .684.001 1.257-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.886.305-1.364.344C17.257 22 16.684 22 16 22H8q-.26 0-.5-.003V2.002L8 2zm-4.5 10a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.5 22h-1A3.5 3.5 0 0 1 3 18.5v-13A3.5 3.5 0 0 1 6.5 2h1zM14 12a1 1 0 1 1 0 2h-2.5a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
NotebookIconFillDuotone.displayName = "NotebookIconFillDuotone";
export { NotebookIconFillDuotone };
