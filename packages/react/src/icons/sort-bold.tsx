import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SortBold = memo(
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
          d="M6 3a1 1 0 0 1 1 1v13.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4-.073.066-.008.005q-.06.048-.125.085l-.014.01a1 1 0 0 1-.333.113Q6.08 21 6 21q-.088-.001-.173-.017l-.026-.003-.048-.012-.047-.012a1 1 0 0 1-.413-.249l-4-4a1 1 0 1 1 1.414-1.414L5 17.586V4a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M16 11a1 1 0 0 1 0 2h-6a1 1 0 1 1 0-2zM19 7a1 1 0 0 1 0 2h-9a1 1 0 1 1 0-2zM22 3a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
SortBold.displayName = "SortBold";
export { SortBold };
