import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextItalicIconBoldDuotone = memo(
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
          d="M17.162 4a2 2 0 0 0-1.897 1.367l-.192.571-4.23 12.695-.017.05A1 1 0 0 0 11.774 20H6.838a2 2 0 0 0 1.897-1.367l4.29-12.867.15-.454A1 1 0 0 0 12.225 4z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM20 2a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TextItalicIconBoldDuotone.displayName = "TextItalicIconBoldDuotone";
export { TextItalicIconBoldDuotone };
