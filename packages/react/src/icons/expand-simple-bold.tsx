import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleIconBold = memo(
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
          d="M8.293 14.293a1 1 0 1 1 1.414 1.414L5.414 20H8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.586zM21 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V5.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L18.586 4H16a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ExpandSimpleIconBold.displayName = "ExpandSimpleIconBold";
export { ExpandSimpleIconBold };
