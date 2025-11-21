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
          d="M19.637 6.545a1.5 1.5 0 0 1 .727 2.91c-1.94.485-3.688.819-5.364 1.002v3.895l1.47 7.354a1.5 1.5 0 0 1-2.94.588l-1.207-6.03a.33.33 0 0 0-.646 0l-1.206 6.03a1.5 1.5 0 0 1-2.942-.588L9 14.352v-3.895c-1.675-.183-3.424-.517-5.364-1.002a1.5 1.5 0 0 1 .728-2.91c5.761 1.44 9.512 1.44 15.273 0"
        />
        <path
          fill="currentColor"
          d="M12 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
      </svg>
    ))
);
AccessibilityIconFilled.displayName = "AccessibilityIconFilled";
export { AccessibilityIconFilled };
