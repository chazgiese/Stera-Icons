import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PaperclipIconFilltone = memo(
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
          d="M9.75.5A6.25 6.25 0 0 1 16 6.75v7.75a4 4 0 0 1-8 0V8a1.5 1.5 0 1 1 3 0v6.5a1 1 0 1 0 2 0V6.75A3.25 3.25 0 0 0 9.75 3.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.75 3.5A3.25 3.25 0 0 0 6.5 6.75V15a5.5 5.5 0 1 0 11 0V8a1.5 1.5 0 0 1 3 0v7a8.5 8.5 0 0 1-17 0V6.75A6.25 6.25 0 0 1 9.75.5z"
        />
      </svg>
    ))
);
PaperclipIconFilltone.displayName = "PaperclipIconFilltone";
export { PaperclipIconFilltone };
