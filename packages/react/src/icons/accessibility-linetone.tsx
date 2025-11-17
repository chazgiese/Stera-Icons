import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AccessibilityIconLinetone = memo(
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
          d="M12 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
        />
        <path
          fill="currentColor"
          d="M19.759 6.53a1 1 0 1 1 .484 1.94c-2.092.523-3.954.867-5.742 1.035v4.347a.5.5 0 0 0 .01.097l1.47 7.355.015.1a1 1 0 0 1-1.976.292l-1.258-6.294a.5.5 0 0 0-.404-.394L12.271 15h-.54a.5.5 0 0 0-.491.402l-1.259 6.294a1 1 0 0 1-1.976-.292l.015-.1 1.471-7.355a.5.5 0 0 0 .01-.097V9.505c-1.789-.168-3.65-.512-5.742-1.035a1 1 0 1 1 .484-1.94c5.84 1.46 9.675 1.46 15.516 0"
          opacity={0.4}
        />
      </svg>
    ))
);
AccessibilityIconLinetone.displayName = "AccessibilityIconLinetone";
export { AccessibilityIconLinetone };
