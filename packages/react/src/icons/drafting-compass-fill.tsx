import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DraftingCompassIconFill = memo(
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
          d="M4.453 16.635a1 1 0 0 1 1.715 1.028l-2.31 3.852a1 1 0 0 1-1.715-1.03zM12 2.25a3.75 3.75 0 0 1 2.716 6.333l7.142 11.902a1 1 0 0 1-1.715 1.03l-3.365-5.606A11.001 11.001 0 0 1 2.1 10.801a1 1 0 0 1 1.8-.873 9 9 0 0 0 11.844 4.257l-2.743-4.572a3.75 3.75 0 0 1-2.003 0l-1.74 2.902a1 1 0 0 1-1.716-1.03l1.741-2.902A3.75 3.75 0 0 1 12 2.25"
        />
      </svg>
    ))
);
DraftingCompassIconFill.displayName = "DraftingCompassIconFill";
export { DraftingCompassIconFill };
