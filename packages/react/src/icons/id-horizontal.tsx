import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const IdHorizontalIcon = memo(
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
          d="M8.83 8.25A2.75 2.75 0 0 1 11.58 11c0 .714-.276 1.36-.722 1.85a3.76 3.76 0 0 1 1.507 1.9.75.75 0 1 1-1.414.5 2.251 2.251 0 0 0-4.244 0 .75.75 0 1 1-1.414-.5 3.76 3.76 0 0 1 1.506-1.9 2.74 2.74 0 0 1-.72-1.85 2.75 2.75 0 0 1 2.75-2.75m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18 13.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM18 9.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H6A4.75 4.75 0 0 1 1.25 16V8A4.75 4.75 0 0 1 6 3.25zM6 4.75A3.25 3.25 0 0 0 2.75 8v8A3.25 3.25 0 0 0 6 19.25h12A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
IdHorizontalIcon.displayName = "IdHorizontalIcon";
export { IdHorizontalIcon };
