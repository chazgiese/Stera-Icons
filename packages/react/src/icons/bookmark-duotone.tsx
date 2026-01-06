import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookmarkIconDuotone = memo(
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
          d="M12 2.75H8A3.25 3.25 0 0 0 4.75 6v14.246c0 .64.75.986 1.237.57l4.227-3.61c.514-.44 1.15-.66 1.786-.66v1.5c-.29 0-.578.101-.812.3l-4.227 3.611c-1.46 1.247-3.711.21-3.711-1.71V6A4.75 4.75 0 0 1 8 1.25h4z"
        />
        <path
          fill="currentColor"
          d="M16 1.25A4.75 4.75 0 0 1 20.75 6v14.246c0 1.92-2.25 2.958-3.71 1.711l-4.228-3.61c-.234-.2-.522-.3-.812-.3v-1.5c.635 0 1.272.22 1.786.66l4.227 3.61a.75.75 0 0 0 1.237-.57V6A3.25 3.25 0 0 0 16 2.75h-4v-1.5z"
          opacity={0.4}
        />
      </svg>
    ))
);
BookmarkIconDuotone.displayName = "BookmarkIconDuotone";
export { BookmarkIconDuotone };
