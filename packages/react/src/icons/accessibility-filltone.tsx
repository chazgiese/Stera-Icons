import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AccessibilityIconFilltone = memo(
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
          d="M12 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
        <path
          fill="currentColor"
          d="M2.545 7.636a1.5 1.5 0 0 1 1.819-1.091c5.76 1.44 9.512 1.44 15.272 0a1.5 1.5 0 0 1 .728 2.91c-1.94.485-3.689.82-5.364 1.003v3.893l1.47 7.355a1.5 1.5 0 0 1-2.941.588L12.27 16h-.54l-1.26 6.294a1.5 1.5 0 1 1-2.941-.588l1.47-7.355v-3.893c-1.675-.184-3.423-.518-5.364-1.003a1.5 1.5 0 0 1-1.09-1.82"
          opacity={0.4}
        />
      </svg>
    ))
);
AccessibilityIconFilltone.displayName = "AccessibilityIconFilltone";
export { AccessibilityIconFilltone };
