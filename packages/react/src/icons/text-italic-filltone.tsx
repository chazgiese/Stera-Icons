import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextItalicIconFilltone = memo(
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
          d="M17.883 4.5a2.5 2.5 0 0 0-2.371 1.709l-3.773 11.316a1.5 1.5 0 0 0 1.423 1.975H6.117a2.5 2.5 0 0 0 2.371-1.709l3.774-11.32A1.5 1.5 0 0 0 10.838 4.5z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M14 19.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zM20 1.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
TextItalicIconFilltone.displayName = "TextItalicIconFilltone";
export { TextItalicIconFilltone };
