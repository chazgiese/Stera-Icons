import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlayCircle = memo(
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
          d="M9.94 6.87c.335-.02.74.25 1.547.788l4.516 3.01c.668.446 1.002.669 1.118.95a1 1 0 0 1 0 .765c-.116.28-.45.503-1.118.948l-4.516 3.01c-.808.54-1.212.809-1.547.789a1 1 0 0 1-.738-.396C9 16.467 9 15.981 9 15.011V8.989c0-.97 0-1.456.202-1.723.177-.234.447-.378.738-.396"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlayCircle.displayName = "PlayCircle";
export { PlayCircle };
