import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashItalicFilled = memo(
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
          d="M15.536 2.675a1.5 1.5 0 1 1 2.928.65L17.536 7.5H21a1.5 1.5 0 0 1 0 3h-4.13l-.668 3H19a1.5 1.5 0 0 1 0 3h-3.464l-1.072 4.825a1.5 1.5 0 1 1-2.928-.65l.928-4.175H9.536l-1.072 4.825a1.5 1.5 0 1 1-2.928-.65l.928-4.175H3a1.5 1.5 0 0 1 0-3h4.13l.667-3H5a1.5 1.5 0 0 1 0-3h3.464l1.072-4.825a1.5 1.5 0 1 1 2.928.65L11.536 7.5h2.928zM10.202 13.5h2.928l.667-3h-2.928z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HashItalicFilled.displayName = "HashItalicFilled";
export { HashItalicFilled };
