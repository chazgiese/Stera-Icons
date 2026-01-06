import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextItalicIconDuotone = memo(
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
          d="M16.441 3.75a1.25 1.25 0 0 0-1.185.854l-4.887 14.659a.75.75 0 0 0 .712.987H7.56a1.25 1.25 0 0 0 1.185-.855l4.887-14.658a.75.75 0 0 0-.712-.987z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14 20.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM20 2.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
TextItalicIconDuotone.displayName = "TextItalicIconDuotone";
export { TextItalicIconDuotone };
