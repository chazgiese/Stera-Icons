import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeXIconFilltone = memo(
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
          d="M9.237 2.882a4.5 4.5 0 0 1 5.526 0l5.5 4.279A4.5 4.5 0 0 1 22 10.712V17.5a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-6.788a4.5 4.5 0 0 1 1.737-3.551zm5.97 7.411a1 1 0 0 0-1.414 0L12 12.086l-1.793-1.793a1 1 0 1 0-1.414 1.415l1.793 1.793-1.793 1.792a1 1 0 0 0 1.414 1.415L12 14.915l1.793 1.793a1 1 0 0 0 1.414-1.415l-1.793-1.792 1.793-1.793a1 1 0 0 0 0-1.415"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.793 10.293a1 1 0 1 1 1.414 1.414L13.414 13.5l1.793 1.793a1 1 0 0 1-1.414 1.414L12 14.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.414-1.414L12 12.086z"
        />
      </svg>
    ))
);
HomeXIconFilltone.displayName = "HomeXIconFilltone";
export { HomeXIconFilltone };
