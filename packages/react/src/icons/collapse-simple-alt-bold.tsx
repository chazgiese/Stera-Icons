import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIconBold = memo(
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
          d="M21 14a1 1 0 1 1 0 2h-3.586l4.293 4.293a1 1 0 1 1-1.414 1.414L16 17.414V21a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zM9 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3.586L2.293 3.707a1 1 0 1 1 1.414-1.414L8 6.586V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CollapseSimpleAltIconBold.displayName = "CollapseSimpleAltIconBold";
export { CollapseSimpleAltIconBold };
