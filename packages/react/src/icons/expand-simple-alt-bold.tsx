import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIconBold = memo(
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
          d="M21 14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.586l-4.293-4.293a1 1 0 1 1 1.414-1.414L20 18.586V15a1 1 0 0 1 1-1M9 2a1 1 0 0 1 0 2H5.414l4.293 4.293a1 1 0 1 1-1.414 1.414L4 5.414V9a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconBold.displayName = "ExpandSimpleAltIconBold";
export { ExpandSimpleAltIconBold };
