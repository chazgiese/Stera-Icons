import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EditSquareIconDuotone = memo(
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
          d="M11 2.25a.75.75 0 0 1 0 1.5H8A4.25 4.25 0 0 0 3.75 8v8A4.25 4.25 0 0 0 8 20.25h8A4.25 4.25 0 0 0 20.25 16v-3a.75.75 0 0 1 1.5 0v3A5.75 5.75 0 0 1 16 21.75H8A5.75 5.75 0 0 1 2.25 16V8A5.75 5.75 0 0 1 8 2.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.348 2.349a3.75 3.75 0 0 1 5.309 5.295l-8.12 8.334a.75.75 0 0 1-.456.222l-5 .545a.75.75 0 0 1-.823-.862l.758-4.789.027-.112a.75.75 0 0 1 .177-.294l8.121-8.332zm4.242 1.06a2.25 2.25 0 0 0-3.181 0l-7.95 8.155-.566 3.584 3.757-.411 7.934-8.14.006-.006a2.25 2.25 0 0 0 0-3.182"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EditSquareIconDuotone.displayName = "EditSquareIconDuotone";
export { EditSquareIconDuotone };
