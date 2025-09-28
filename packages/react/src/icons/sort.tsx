import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Sort = memo(
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
          d="M6 3.25a.75.75 0 0 1 .75.75v14.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a1 1 0 0 1-.113.092l-.001.002a1 1 0 0 1-.107.058l-.048.018a1 1 0 0 1-.091.027q-.02.007-.04.01a1 1 0 0 1-.13.013 1 1 0 0 1-.142-.015H5.85q-.03-.008-.056-.017-.043-.01-.084-.027-.044-.02-.084-.044l-.044-.025a1 1 0 0 1-.112-.092l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4A.75.75 0 0 1 6 3.25"
        />
        <path
          fill="currentColor"
          d="M16 11.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM19 7.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM22 3.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
Sort.displayName = "Sort";
export { Sort };
