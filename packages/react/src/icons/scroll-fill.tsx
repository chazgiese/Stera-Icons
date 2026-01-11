import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrollIconFill = memo(
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
          d="M20.75 15c.966 0 1.75.784 1.75 1.75V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.25A1.75 1.75 0 0 1 1.5 8.75V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9zm-3.25 0V6a1 1 0 0 0-1-1H7.326c.11.313.174.649.174 1v12a1 1 0 0 0 1 1l.103-.005A1 1 0 0 0 9.5 18v-1.25c0-.966.784-1.75 1.75-1.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScrollIconFill.displayName = "ScrollIconFill";
export { ScrollIconFill };
