import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrowserPlusFilled = memo(
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
          d="M23 16c0 .684.001 1.257-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.886.305-1.364.344C19.257 21 18.684 21 18 21H6c-.684 0-1.257.001-1.724-.037-.478-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.305-.886-.344-1.364C1 17.257 1 16.684 1 16v-6h22zm-11-4a1 1 0 0 0-1 1v1.5H9.5a1 1 0 1 0 0 2H11V18a1 1 0 1 0 2 0v-1.5h1.5a1 1 0 1 0 0-2H13V13a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18 3c.684 0 1.257-.001 1.724.037.478.04.933.125 1.365.345a3.5 3.5 0 0 1 1.53 1.53c.22.43.305.886.344 1.364C23 6.743 23 7.316 23 8H1c0-.684-.001-1.257.037-1.724.04-.478.125-.933.345-1.365a3.5 3.5 0 0 1 1.53-1.53c.43-.22.886-.305 1.364-.344C4.743 3 5.316 3 6 3z"
        />
      </svg>
    ))
);
BrowserPlusFilled.displayName = "BrowserPlusFilled";
export { BrowserPlusFilled };
