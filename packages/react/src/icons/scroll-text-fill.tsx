import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrollTextIconFill = memo(
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
          d="M13.5 10.5a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM15 7a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.5 3a3 3 0 0 1 3 3v9h1.25c.966 0 1.75.784 1.75 1.75V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.25A1.75 1.75 0 0 1 1.5 8.75V6a3 3 0 0 1 3-3zM7.326 5c.11.313.174.649.174 1v12a1 1 0 0 0 1 1l.103-.005A1 1 0 0 0 9.5 18v-1.25c0-.966.784-1.75 1.75-1.75h6.25V6a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScrollTextIconFill.displayName = "ScrollTextIconFill";
export { ScrollTextIconFill };
