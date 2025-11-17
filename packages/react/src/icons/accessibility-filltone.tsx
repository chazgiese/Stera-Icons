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
          d="M12 1.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
        <path
          fill="currentColor"
          d="M2.545 6.886a1.5 1.5 0 0 1 1.82-1.091c5.76 1.44 9.511 1.44 15.272 0a1.5 1.5 0 0 1 .727 2.91c-1.94.485-3.688.82-5.364 1.003V13.6l1.47 7.355a1.5 1.5 0 0 1-2.94.588l-1.26-6.294h-.54l-1.26 6.294a1.5 1.5 0 1 1-2.94-.588L9 13.6V9.708c-1.675-.183-3.424-.518-5.364-1.003a1.5 1.5 0 0 1-1.09-1.82"
          opacity={0.4}
        />
      </svg>
    ))
);
AccessibilityIconFilltone.displayName = "AccessibilityIconFilltone";
export { AccessibilityIconFilltone };
