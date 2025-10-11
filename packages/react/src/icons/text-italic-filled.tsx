import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextItalicIconFilled = memo(
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
          d="M20 1.5a1.5 1.5 0 0 1 0 3h-2.117a2.5 2.5 0 0 0-2.371 1.709l-3.776 11.324a1.5 1.5 0 0 0 1.426 1.967H14a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h2.117a2.5 2.5 0 0 0 2.371-1.709l3.773-11.316A1.5 1.5 0 0 0 10.838 4.5H10a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
TextItalicIconFilled.displayName = "TextItalicIconFilled";
export { TextItalicIconFilled };
