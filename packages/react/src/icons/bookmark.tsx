import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookmarkIcon = memo(
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
          d="M16 1.25A4.75 4.75 0 0 1 20.75 6v14.246c0 1.92-2.25 2.958-3.71 1.711l-4.228-3.61a1.25 1.25 0 0 0-1.623 0l-4.228 3.61c-1.46 1.247-3.711.21-3.711-1.71V6A4.75 4.75 0 0 1 8 1.25zm-8 1.5A3.25 3.25 0 0 0 4.75 6v14.246c0 .64.75.986 1.237.57l4.227-3.61a2.75 2.75 0 0 1 3.572 0l4.227 3.61a.75.75 0 0 0 1.237-.57V6A3.25 3.25 0 0 0 16 2.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BookmarkIcon.displayName = "BookmarkIcon";
export { BookmarkIcon };
