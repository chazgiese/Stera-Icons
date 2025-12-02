import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AccessibilityIconFilled = memo(
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
          d="M19.637 5.795a1.5 1.5 0 0 1 .727 2.91c-1.94.485-3.688.819-5.364 1.002v3.894l1.47 7.355a1.5 1.5 0 1 1-2.94.588l-1.26-6.294h-.54l-1.26 6.294a1.5 1.5 0 0 1-2.94-.588L9 13.602V9.707c-1.675-.183-3.424-.517-5.364-1.002a1.5 1.5 0 0 1 .728-2.91c5.761 1.44 9.512 1.44 15.273 0"
        />
        <path
          fill="currentColor"
          d="M12 1.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
      </svg>
    ))
);
AccessibilityIconFilled.displayName = "AccessibilityIconFilled";
export { AccessibilityIconFilled };
