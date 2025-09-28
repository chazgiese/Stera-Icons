import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PeaceBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M6.383 19.03A8.95 8.95 0 0 0 11 20.942v-6.528zM13 20.942a8.95 8.95 0 0 0 4.616-1.912L13 14.414zM11 3.057C6.5 3.554 3 7.367 3 12a8.96 8.96 0 0 0 1.969 5.616L11 11.586zm2 8.529 6.03 6.03A8.96 8.96 0 0 0 21 12c0-4.632-3.5-8.446-8-8.943z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PeaceBold.displayName = "PeaceBold";
export { PeaceBold };
