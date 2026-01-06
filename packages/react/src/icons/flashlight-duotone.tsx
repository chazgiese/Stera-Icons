import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlashlightIconDuotone = memo(
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
          d="M15 1.25A2.75 2.75 0 0 1 17.75 4v2.343c0 1.26-.5 2.468-1.392 3.36l-.156.155a3.25 3.25 0 0 0-.952 2.3V20a2.75 2.75 0 0 1-2.75 2.75h-1A2.75 2.75 0 0 1 8.75 20v-7.843c0-.862-.343-1.69-.952-2.299l-.156-.156A4.75 4.75 0 0 1 6.256 6.58l-.006-.236V4A2.75 2.75 0 0 1 9 1.25zm-6 1.5c-.69 0-1.25.56-1.25 1.25v2.343l.004.16c.04.804.377 1.567.948 2.139l.156.156c.891.89 1.392 2.1 1.392 3.36V20c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-7.843c0-1.26.5-2.468 1.392-3.36l.156-.155c.61-.61.952-1.437.952-2.3V4c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11 12a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM16.25 5.75h-8.5v-1.5h8.5z"
        />
      </svg>
    ))
);
FlashlightIconDuotone.displayName = "FlashlightIconDuotone";
export { FlashlightIconDuotone };
