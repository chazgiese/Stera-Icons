import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SortAscendingNarrowIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M22 19.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM19 15.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM16 11.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="m6 3.25.076.004.017.002.037.006q.02.003.04.01.046.01.09.027.025.008.049.018a1 1 0 0 1 .107.059v.001q.063.04.114.093l4 4a.75.75 0 1 1-1.06 1.06L6.75 5.81V20a.75.75 0 0 1-1.5 0V5.81L2.53 8.53a.75.75 0 1 1-1.06-1.06l4-4a1 1 0 0 1 .112-.093q.022-.013.044-.024.04-.025.084-.045.047-.02.098-.03.02-.007.042-.013l.008-.001A1 1 0 0 1 6 3.25"
        />
      </svg>
    ))
);
SortAscendingNarrowIconDuotone.displayName = "SortAscendingNarrowIconDuotone";
export { SortAscendingNarrowIconDuotone };
