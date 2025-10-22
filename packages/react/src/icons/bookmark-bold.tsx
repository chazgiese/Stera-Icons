import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookmarkIconBold = memo(
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
          d="M16 1a5 5 0 0 1 5 5v14.246c0 2.134-2.501 3.286-4.124 1.9l-4.227-3.61a1 1 0 0 0-1.298 0l-4.227 3.61C5.502 23.533 3 22.38 3 20.247V6a5 5 0 0 1 5-5zM8 3a3 3 0 0 0-3 3v14.246a.5.5 0 0 0 .825.38l4.227-3.61a3 3 0 0 1 3.896 0l4.227 3.61a.5.5 0 0 0 .825-.38V6a3 3 0 0 0-3-3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookmarkIconBold.displayName = "BookmarkIconBold";
export { BookmarkIconBold };
