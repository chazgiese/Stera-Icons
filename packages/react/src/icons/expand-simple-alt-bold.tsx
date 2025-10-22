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
          d="M15.707 14.293a1 1 0 1 0-1.414 1.414L18.586 20H16a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v2.586zM3 2a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V5.414l4.293 4.293a1 1 0 1 0 1.414-1.414L5.414 4H8a1 1 0 0 0 0-2z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconBold.displayName = "ExpandSimpleAltIconBold";
export { ExpandSimpleAltIconBold };
