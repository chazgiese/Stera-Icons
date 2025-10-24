import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorNavigationIconFilled = memo(
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
          d="M9.988 2.79c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.984 1.97-1.156 4.035-3.09 2.981L12 18.14 4.977 21.97C3.044 23.024.904 20.96 1.888 18.99z"
        />
        <path
          fill="currentColor"
          d="M9.988 2.789c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.984 1.97-1.156 4.035-3.09 2.981L12 18.14l-7.022 3.83c-1.934 1.055-4.074-1.01-3.09-2.981z"
        />
      </svg>
    ))
);
CursorNavigationIconFilled.displayName = "CursorNavigationIconFilled";
export { CursorNavigationIconFilled };
