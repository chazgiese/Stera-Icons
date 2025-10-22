import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SortAscendingNarrowIconFilled = memo(
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
          d="m6.103 3.005.051.008a1 1 0 0 1 .333.114l.014.009q.066.037.125.085l.008.006.073.066 4 4A1 1 0 0 1 10 9H7v11a1 1 0 1 1-2 0V9H2a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 .413-.25q.023-.007.047-.012l.048-.011q.017-.003.035-.005Q5.916 3 6 3zM22 19a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2zM19 15a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2z"
        />
        <path fill="currentColor" d="M16 11a1 1 0 1 1 0 2h-6a1 1 0 0 1 0-2z" />
      </svg>
    ))
);
SortAscendingNarrowIconFilled.displayName = "SortAscendingNarrowIconFilled";
export { SortAscendingNarrowIconFilled };
