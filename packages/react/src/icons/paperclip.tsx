import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Paperclip = memo(
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
          d="M10 1.25A4.75 4.75 0 0 1 14.75 6v9a2.75 2.75 0 1 1-5.5 0V8a.75.75 0 0 1 1.5 0v7a1.25 1.25 0 1 0 2.5 0V6a3.25 3.25 0 0 0-6.5 0v10a5.25 5.25 0 1 0 10.5 0V8a.75.75 0 0 1 1.5 0v8a6.75 6.75 0 0 1-13.5 0V6A4.75 4.75 0 0 1 10 1.25"
        />
      </svg>
    ))
);
Paperclip.displayName = "Paperclip";
export { Paperclip };
