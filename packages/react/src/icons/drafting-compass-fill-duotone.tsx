import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DraftingCompassIconFillDuotone = memo(
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
          d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.453 16.635a1 1 0 0 1 1.715 1.028l-2.31 3.852a1 1 0 0 1-1.715-1.03z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a4 4 0 0 1 2.85 6.806l7.008 11.68a1 1 0 0 1-1.715 1.029l-3.365-5.607A11.001 11.001 0 0 1 2.1 10.801a1 1 0 0 1 1.8-.873A9 9 0 0 0 12 15a9 9 0 0 0 3.745-.815l-2.61-4.35a4 4 0 0 1-2.27 0l-1.607 2.68a1 1 0 0 1-1.716-1.03l1.607-2.68A4 4 0 0 1 12 2m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DraftingCompassIconFillDuotone.displayName = "DraftingCompassIconFillDuotone";
export { DraftingCompassIconFillDuotone };
