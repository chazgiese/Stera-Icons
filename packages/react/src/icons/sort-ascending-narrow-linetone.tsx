import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SortAscendingNarrowIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M22 19a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM19 15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM16 11a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="m6 3 .103.005.051.008a1 1 0 0 1 .333.114l.014.009a1 1 0 0 1 .125.085l.008.006.073.066 4 4a1 1 0 1 1-1.414 1.414L7 6.414V20a1 1 0 0 1-2 0V6.414L2.707 8.707a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 .413-.25l.047-.012.048-.011q.017-.003.035-.005Q5.916 3 6 3"
        />
      </svg>
    ))
);
SortAscendingNarrowIconLinetone.displayName = "SortAscendingNarrowIconLinetone";
export { SortAscendingNarrowIconLinetone };
