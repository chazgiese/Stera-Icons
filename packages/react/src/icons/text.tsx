import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Text = memo(
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
          d="M18 2.25A2.75 2.75 0 0 1 20.75 5v1a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 6 2.25z"
        />
      </svg>
    ))
);
Text.displayName = "Text";
export { Text };
