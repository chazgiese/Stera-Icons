import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsUp = memo(
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
          stroke="currentColor"
          strokeWidth={1.5}
          d="M7.5 10v7a4 4 0 0 0 4 4h3"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.603 18.79s1.076-3.534 1.364-5c.093-.475.181-1.038.259-1.584.166-1.176-.761-2.206-1.949-2.206H15c1.106-2.211 1.784-7-2-7L9.992 8.264A3.45 3.45 0 0 1 7 10a3 3 0 0 0-3 3v4a4 4 0 0 0 4 4h7.709a3 3 0 0 0 2.894-2.21"
        />
      </svg>
    ))
);
ThumbsUp.displayName = "ThumbsUp";
export { ThumbsUp };
